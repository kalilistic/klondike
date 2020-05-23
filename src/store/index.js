import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { combatData } from "./combatData";
import { settings } from "./settings";
import { validValues } from "./validValues";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  supportCircular: true,
  storage: window.localStorage,
  modules: ["settings"]
});

export default new Vuex.Store({
  modules: {
    combatData: combatData,
    validValues: validValues,
    settings: settings
  },
  plugins: [vuexLocal.plugin]
});
