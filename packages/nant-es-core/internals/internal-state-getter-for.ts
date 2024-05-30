
import isObject from "./is-object";
import {get} from "./internal-state";

export default function internalStateGetterFor(type: string) {
  return function (it: any) {
    const state = get(it);
    if(!isObject(it) || state.type !== type) {
      throw new TypeError('Incompatible receiver, ' + type + 'required');
    }
    return state
  }
}