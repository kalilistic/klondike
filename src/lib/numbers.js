import store from "../store";

export function formatNum(number) {
  if (!isFinite(number)) {
    return "---";
  }
  if (store.state.settings.abbreviateNumbers && number >= 1000) {
    return abbrevNum(number);
  }
  return Number(number).toFixed(store.state.settings.precision);
}

function abbrevNum(number) {
  let precision = store.state.settings.precision;
  precision = Math.pow(10, precision);
  let abbrev = ["k", "m", "b", "t"];
  for (let i = abbrev.length - 1; i >= 0; i--) {
    let size = Math.pow(10, (i + 1) * 3);
    if (size <= number) {
      number = Math.round((number * precision) / size) / precision;
      number = number.toFixed(store.state.settings.precision);
      number += " " + abbrev[i];
      break;
    }
  }
  return number;
}
