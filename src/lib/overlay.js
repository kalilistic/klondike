/* global addOverlayListener  */
/* global callOverlayHandler */
/* global startOverlayEvents */

import { parseCombatData } from "./combatData";
import { log } from "./logger";
import { parsePrimaryPlayer } from "./primaryPlayer";

export async function addCombatDataListener(context) {
  log("adding combatData overlay listener");
  addOverlayListener("CombatData", data => {
    log("raw combatData", data);
    let combatData = parseCombatData(data);
    log("parsed combatData", combatData);
    if (!combatData) return;
    log("committing combatData");
    context.$store.commit("updateCombatData", combatData);
    if (context.$router.currentRoute.path === "/") {
      context.$router.push("/encounter");
    }
  });
}

export async function addPrimaryPlayerListener(context) {
  log("adding primaryPlayer overlay listener");
  addOverlayListener("ChangePrimaryPlayer", data => {
    log("raw changePrimaryPlayer", data);
    let primaryPlayer = parsePrimaryPlayer(data);
    log("parsed primaryPlayer", primaryPlayer);
    if (!primaryPlayer) return;
    log("committing primaryPlayer");
    context.$store.commit("updatePrimaryPlayer", primaryPlayer);
  });
}

export async function getLanguageId() {
  let language = await callOverlayHandler({ call: "getLanguage" });
  return language.languageId;
}

export async function startOverlay() {
  log("starting overlay events");
  startOverlayEvents();
}
