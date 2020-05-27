import store from "../store";

export function formatName(name) {
  let names = name.split(" ");
  if (names.length !== 2) return name;
  let nameStyleId = store.state.settings.nameStyleId;
  switch (nameStyleId) {
    case 0:
      return name;
    case 1:
      return abbrevWord(names[0]) + " " + names[1];
    case 2:
      return names[0] + " " + abbrevWord(names[1]);
    case 3:
      return abbrevWord(names[0]) + " " + abbrevWord(names[1]);
    case 4:
      return names[0];
    case 5:
      return names[1];
  }
}

export function isPet(name) {
  let ownerName = name.match(/\((.*)\)/);
  if (ownerName) return name;
}

export function formatPetName(name) {
  let ownerName = name.match(/\((.*)\)/);
  ownerName = ownerName.pop();
  let ownerNameFormatted = formatName(ownerName);
  return name.replace(ownerName, ownerNameFormatted);
}

function abbrevWord(word) {
  return word.charAt(0).toUpperCase() + ".";
}
