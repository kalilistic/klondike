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
    },
    digitSeps: state => {
      return state.digitSeps;
    },
    decimalSeps: state => {
      return state.decimalSeps;
    },
    jobDetails: state => {
      return state.jobDetails;
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
  state.digitSeps = [
    { id: 0, name: "None" },
    { id: 1, name: "Period", sep: "." },
    { id: 2, name: "Comma", sep: "," }
  ];
  state.decimalSeps = [
    { id: 0, name: "Period", sep: "." },
    { id: 1, name: "Comma", sep: "," }
  ];
  state.jobDetails = {
    AST: { name: "Astrologian", role: "HEALER" },
    BLM: { name: "Black Mage", role: "DPS" },
    BRD: { name: "Bard", role: "DPS" },
    DNC: { name: "Dancer", role: "DPS" },
    DRG: { name: "Dragoon", role: "DPS" },
    DRK: { name: "Dark Knight", role: "TANK" },
    GNB: { name: "Gunbreaker", role: "TANK" },
    MCH: { name: "Machinist", role: "DPS" },
    MNK: { name: "Monk", role: "DPS" },
    NIN: { name: "Ninja", role: "DPS" },
    PLD: { name: "Paladin", role: "TANK" },
    RDM: { name: "Red Mage", role: "DPS" },
    SAM: { name: "Samurai", role: "DPS" },
    SCH: { name: "Scholar", role: "HEALER" },
    SMN: { name: "Summoner", role: "DPS" },
    WAR: { name: "Warrior", role: "TANK" },
    WHM: { name: "White Mage", role: "HEALER" },
    BLU: { name: "Blue Mage", role: "DPS" },
    LMB: { name: "Limit Break", role: "LMB" },
    PET: { name: "Pet", role: "PET" },
    MOB: { name: "Monster", role: "MOB" },
    ACN: { name: "Arcanist", role: "DPS" },
    ARC: { name: "Archer", role: "DPS" },
    CNJ: { name: "Conjurer", role: "HEALER" },
    GLA: { name: "Gladiator", role: "TANK" },
    LNC: { name: "Lancer", role: "DPS" },
    MRD: { name: "Marauder", role: "MRD" },
    PGL: { name: "Pugilist", role: "DPS" },
    ROG: { name: "Rogue", role: "DPS" },
    THM: { name: "Thaumaturge", role: "DPS" },
    BTN: { name: "Botanist", role: "GATHERER" },
    FSH: { name: "Fisher", role: "GATHERER" },
    MIN: { name: "Miner", role: "GATHERER" },
    ALC: { name: "Alchemist", role: "CRAFTER" },
    ARM: { name: "Armorer", role: "CRAFTER" },
    BSM: { name: "Blacksmith", role: "CRAFTER" },
    CRP: { name: "Carpenter", role: "CRAFTER" },
    CUL: { name: "Culinarian", role: "CRAFTER" },
    GSM: { name: "Goldsmith", role: "CRAFTER" },
    LTW: { name: "Leatherworker", role: "CRAFTER" },
    WVR: { name: "Weaver", role: "CRAFTER" }
  };

  return state;
}
