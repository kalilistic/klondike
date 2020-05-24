/* global addOverlayListener  */
/* global callOverlayHandler */
/* global startOverlayEvents */

import { parseCombatData } from "./combatData";

export async function addCombatDataListener(context) {
  addOverlayListener("CombatData", data => {
    let combatData = parseCombatData(data);
    if (!combatData) return;
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
  startOverlayEvents();
}
