import store from "../store";

export function processFloat(number) {
  if (!number) return;
  let result = {};
  result.sanitized = sanitizeFloat(number);
  result.formatted = formatNum(result.sanitized, true);
  return result;
}

export function processInteger(number) {
  if (!number) return;
  let result = {};
  result.sanitized = sanitizeInteger(number);
  result.formatted = formatNum(result.sanitized, false);
  return result;
}

function formatNum(number, updatePrecision) {
  if (!isFinite(number)) {
    return "---";
  }
  if (store.state.settings.abbreviateNumbers && number >= 1000) {
    return abbrevNum(number);
  } else if (updatePrecision) {
    return number.toFixed(store.state.settings.precision);
  } else {
    return number;
  }
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

function sanitizeFloat(number) {
  return parseFloat(number.replace(",", "."));
}

function sanitizeInteger(number) {
  return parseInt(number.replace(/[,.]/g, ""));
}
