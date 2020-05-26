import store from "../store";

export function processFloat(number) {
  if (!number) return;
  let result = {};
  result.sanitized = parseFloat(number.replace(",", "."));
  result.formatted = processNumber(result.sanitized, true);
  return result;
}

export function processInteger(number) {
  if (!number) return;
  let result = {};
  result.sanitized = parseInt(number.replace(/[,.]/g, ""));
  result.formatted = processNumber(result.sanitized, false);
  return result;
}

function processNumber(number, shouldUpdatePrecision) {
  let digitSep = store.getters.digitSeps[store.state.settings.digitSepId].sep;
  let decimalSep =
    store.getters.decimalSeps[store.state.settings.decimalSepId].sep;

  if (!isNumber(number)) {
    return "---";
  }
  if (shouldAbbreviate(number)) {
    let num = abbreviateNumber(number);
    num = updateDecimalSeparator(num, decimalSep);
    return num;
  }
  let num = number.toString();
  if (shouldUpdatePrecision) {
    num = updatePrecision(num);
  }
  if (num.includes(".")) {
    let numArr = num.split(".");
    numArr[0] = addDigitSeparators(numArr[0], digitSep);
    num = numArr.join(decimalSep);
  } else {
    num = addDigitSeparators(num, digitSep);
  }
  return num;
}

function isNumber(number) {
  return isFinite(number);
}

function shouldAbbreviate(number) {
  return store.state.settings.abbreviateNumbers && number >= 1000;
}

function abbreviateNumber(number) {
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

function updateDecimalSeparator(number, sep) {
  return number.replace(".", sep);
}

function addDigitSeparators(number, sep) {
  let num = number.toString();
  if (store.state.settings.digitSepId === 0) return num;
  if (num.length < 4) return num;
  return num.replace(/(\d)(?=(\d{3})+$)/g, "$1" + sep);
}

function updatePrecision(number) {
  return parseFloat(number).toFixed(store.state.settings.precision);
}
