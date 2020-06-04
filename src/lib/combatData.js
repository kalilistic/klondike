import TestCombatData from "../constants/TestCombatData";
import store from "../store";
import { formatName, formatPetName, isPet } from "./names";
import { processFloat, processInteger } from "./numbers";
import { log } from "./logger";
import { LMB, MIS, MOB, PET } from "../constants/Jobs";

export function AddTestCombatData(context) {
  context.$store.commit("updateCombatData", parseCombatData(TestCombatData));
  context.$router.push("/encounter").then(() => {});
}

export function getCombatDataModel() {
  return {
    encounter: {
      duration: String.empty,
      dps: String.empty,
      damage: String.empty,
      deaths: String.empty
    },
    combatants: [{}]
  };
}

export function parseCombatData(combatDataIn) {
  if (combatDataIn.Encounter.DURATION === "0") return;
  if (combatDataIn.Encounter.damage === "0") return;
  let combatData = getCombatDataModel();
  let encounter = combatDataIn.Encounter;
  combatData.encounter.duration = encounter.duration;
  combatData.encounter.dps = processFloat(encounter.encdps).formatted;
  combatData.encounter.damage = processInteger(encounter.damage).formatted;
  combatData.encounter.deaths = encounter.deaths;

  let newCombatants = [];
  for (let i = 0; i < Object.values(combatDataIn.Combatant).length; i++) {
    let combatant = Object.values(combatDataIn.Combatant)[i];
    let dps = processFloat(combatant.encdps);
    let newCombatant = {
      name: combatant.name,
      job: combatant.Job.toUpperCase(),
      _dps: dps.sanitized,
      dps: dps.formatted,
      dmgPct: combatant["damage%"],
      chPct: combatant["crithit%"],
      dhPct: combatant["DirectHitPct"],
      cdhPct: combatant["CritDirectHitPct"],
      healPct: combatant["healed%"],
      overHealPct: combatant["OverHealPct"],
      deaths: combatant["deaths"]
    };
    if (newCombatant.job === "") {
      if (!newCombatant.name) continue;
      if (newCombatant.name === "Limit Break") {
        if (store.state.settings.limitBreak) {
          newCombatant.job = LMB;
          if (store.state.settings.styleLimitBreak) {
            newCombatant.name = formatName(newCombatant.name);
          }
        } else {
          continue;
        }
      } else if (isPet(newCombatant.name)) {
        if (store.state.settings.includePets) {
          newCombatant.job = PET;
          newCombatant.name = formatPetName(newCombatant.name);
        } else {
          continue;
        }
      } else if (store.state.settings.includeJobless) {
        newCombatant.job = MOB;
      } else {
        continue;
      }
    } else {
      newCombatant.name = formatName(newCombatant.name);
    }
    let jobDetails = store.getters.jobDetails;
    let jobDetail = jobDetails[newCombatant.job];
    if (!jobDetail) {
      log("Can't find job.", newCombatant);
      newCombatant.job = MIS;
      jobDetail = jobDetails[newCombatant.job];
    }
    newCombatant.role = jobDetail.role;
    newCombatant.icon = jobDetail.icon;
    newCombatants.push(newCombatant);
  }
  let percentMode = store.state.settings.percentBarMode;
  if (percentMode === 0 && newCombatants) {
    for (let i = 0; i < newCombatants.length; i++) {
      newCombatants[i].percent = newCombatants[i].dmgPct;
    }
  } else if (percentMode === 1 && newCombatants.length > 1) {
    newCombatants[0].percent = 100;
    for (let i = 1; i < newCombatants.length; i++) {
      newCombatants[i].percent =
        Math.round((newCombatants[i]._dps / newCombatants[0]._dps) * 100) + "%";
    }
    newCombatants[0].percent += "%";
  }
  combatData.combatants = newCombatants;
  return combatData;
}
