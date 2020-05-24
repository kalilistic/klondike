import { getCombatDataModel } from "../lib/combatData";

export const combatData = {
  state: getCombatDataModel(),
  mutations: {
    updateCombatData(state, combatData) {
      state.encounter = combatData.encounter;
      state.combatants = combatData.combatants;
    },
    resetCombatData(state) {
      const s = getCombatDataModel();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    }
  },
  getters: {
    inEncounter: state => {
      return (
        state.encounter.duration &&
        state.combatants &&
        state.combatants.length > 0
      );
    }
  }
};
