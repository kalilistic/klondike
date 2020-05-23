/* eslint-disable no-unused-vars */

export const validValues = {
  state: loadValidValues,
  mutations: {
    loadValidValues(state) {
      state = loadValidValues();
    }
  },
  getters: {
    languages: state => {
      return state.languages;
    }
  }
};

function loadValidValues() {
  let state = {};
  state.languages = [
    { id: 0, name: "Default", locale: "en" },
    { id: 1, name: "English", locale: "en" },
    { id: 2, name: "Français", locale: "fr" },
    { id: 3, name: "Deutsch", locale: "de" },
    { id: 4, name: "日本語", locale: "ja" },
    { id: 5, name: "中文", locale: "cn" },
    { id: 6, name: "한국어", locale: "kr" }
  ];
  state.nameStyles = [
    { id: 0, name: "First Last" },
    { id: 1, name: "F. Last" },
    { id: 2, name: "First L." },
    { id: 3, name: "F. L." },
    { id: 4, name: "First" },
    { id: 5, name: "Last" }
  ];
  state.percentBarModes = [
    { id: 0, name: "Encounter" },
    { id: 1, name: "Highest DPS" }
  ];
  return state;
}
