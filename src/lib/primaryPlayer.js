import TestPrimaryPlayer from "../constants/TestPrimaryPlayer";

export function AddTestPrimaryPlayer(context) {
  let player = parsePrimaryPlayer(TestPrimaryPlayer);
  context.$store.commit("updatePrimaryPlayer", player);
}

export function parsePrimaryPlayer(primaryPlayer) {
  if (!primaryPlayer) return;
  return primaryPlayer.charName;
}
