import store from "../store";

export function formatFloat(number) {
  if (!number) return;
  let float = parseFloat(number.replace(",", "."));
  let formattedFloat = formatNum(float);
  return Number(formattedFloat).toFixed(store.state.settings.precision);
}

export function formatInteger(number) {
  if (!number) return;
  let integer = parseInt(number.replace(/[,.]/g, ""));
  return formatNum(integer);
}

function formatNum(number) {
  if (!isFinite(number)) {
    return "---";
  }
  if (store.state.settings.abbreviateNumbers && number >= 1000) {
    return abbrevNum(number);
  }
  return number;
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
