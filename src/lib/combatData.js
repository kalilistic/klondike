import TestCombatData from "../constants/TestCombatData";
import { formatFloat, formatInteger } from "./numbers";
import store from "../store";
import { formatName, formatPetName } from "./names";

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
  combatData.encounter.dps = formatFloat(encounter.encdps);
  combatData.encounter.damage = formatInteger(encounter.damage);
  combatData.encounter.deaths = encounter.deaths;

  let newCombatants = [];
  for (let i = 0; i < Object.values(combatDataIn.Combatant).length; i++) {
    let combatant = Object.values(combatDataIn.Combatant)[i];
    let newCombatant = {
      name: combatant.name,
      job: combatant.Job.toUpperCase(),
      _dps: combatant.encdps,
      dps: formatFloat(combatant.encdps),
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
          newCombatant.job = "LMB";
          if (store.state.settings.styleLimitBreak) {
            newCombatant.name = formatName(newCombatant.name);
          }
        } else {
          continue;
        }
      } else {
        newCombatant.job = "PET";
        newCombatant.name = formatPetName(newCombatant.name);
      }
    } else {
      newCombatant.name = formatName(newCombatant.name);
    }
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
