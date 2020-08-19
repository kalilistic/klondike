import { TinyColor } from "@ctrl/tinycolor/dist";

export const settings = {
  state: initialState,
  mutations: {
    update(state, newState) {
      Object.keys(newState).forEach(key => {
        state[key] = newState[key];
      });
      calcDerivedProps(state);
      if ("percentBarRole" in newState) {
        updateDefaultPercentBarColor(state);
      }
    },
    reset(state, newSettings) {
      const s = initialState();
      Object.keys(newSettings).forEach(key => {
        state[key] = s[key];
      });
      calcDerivedProps(state);
      if ("percentBarRole" in newSettings) {
        updateDefaultPercentBarColor(state);
      }
    },
    resetAll(state) {
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
      calcDerivedProps(state);
      updateDefaultPercentBarColor(state);
    },
    updatePrimaryPlayer(state, primaryPlayer) {
      state.primaryPlayer = primaryPlayer;
    }
  }
};

function initialState() {
  let state = {
    collapsed: false,
    backgroundColor: "#1e1e1e",
    fontColor: "#ebffff",
    opacity: 85,
    nameStyleId: 0,
    styleLimitBreak: false,
    blurNames: false,
    abbreviateNumbers: false,
    precision: 0,
    jobIcons: true,
    blurIcons: false,
    iconSize: 1,
    iconColor: "#ebffff",
    percentBar: true,
    percentBarMode: 1,
    languageId: 0,
    limitBreak: true,
    logging: false,
    digitSepId: 2,
    decimalSepId: 0,
    includePets: false,
    includeJobless: false,
    alwaysShowSplash: false,
    latestSplashSeen: 0,
    showGithub: true,
    primaryPlayer: String.empty,
    percentBarYou: false,
    percentBarColorYou: "#42126c",
    percentBarRole: true,
    percentBarColorTank: "#2d3a80",
    percentBarColorHeal: "#346624",
    percentBarColorDps: "#732828",
    secondaryStat: 0
  };
  calcDerivedProps(state);
  updateDefaultPercentBarColor(state);
  return state;
}

function calcDerivedProps(state) {
  calcColors(state);
  calcIcon(state);
  calcPercentBar(state);
  calcCollapsed(state);
}

function calcColors(state) {
  state._foregroundColor = new TinyColor(state.backgroundColor)
    .lighten(10)
    .toString();
  state._controlColor = new TinyColor(state.backgroundColor)
    .lighten(70)
    .toString();
}

function calcIcon(state) {
  if (state.jobIcons) {
    state._jobIconDisplay = "flex";
    switch (state.iconSize) {
      case 1:
        state._iconSize = "1.5em";
        break;
      case 2:
        state._iconSize = "1.8em";
        break;
      case 3:
        state._iconSize = "2em";
        break;
    }
  } else {
    state._jobIconDisplay = "none";
  }
}

function calcPercentBar(state) {
  if (state.percentBar) {
    state._percentBar = "block";
  } else {
    state._percentBar = "none";
  }
}

function calcCollapsed(state) {
  if (state.collapsed) {
    state._mainDisplay = "none";
  } else {
    state._mainDisplay = "flex";
  }
}

function updateDefaultPercentBarColor(state) {
  if (state.percentBarRole) {
    state.percentBarColor = "#484C4E";
  } else {
    state.percentBarColor = "#12676c";
  }
}
