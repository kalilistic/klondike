import { stringify } from "javascript-stringify";
import store from "../store";

export function log(message, content) {
  if (!store.state.settings.logging) return;
  let msg = message;
  if (content) {
    msg = ": " + stringify(content);
  }
  console.log(msg);
}
