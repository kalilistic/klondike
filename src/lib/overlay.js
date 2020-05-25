/* global addOverlayListener  */
/* global callOverlayHandler */
/* global startOverlayEvents */

import { parseCombatData } from "./combatData";
import { log } from "./logger";

export async function addCombatDataListener(context) {
  log("adding overlay listener");
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

export async function getLanguageId() {
  let language = await callOverlayHandler({ call: "getLanguage" });
  return language.languageId;
}

export async function startOverlay() {
  log("starting overlay events");
  startOverlayEvents();
}
