/* global addOverlayListener  */
/* global callOverlayHandler */
/* global startOverlayEvents */

import { parseCombatData } from "./combatData";

export async function addCombatDataListener(context) {
  addOverlayListener("CombatData", data => {
    context.$store.commit("updateCombatData", parseCombatData(data));
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
