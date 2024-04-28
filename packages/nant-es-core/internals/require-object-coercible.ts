
import isNullOrUndefined from "./is-null-or-undefined";

// https://tc39.es/ecma262/#sec-requireobjectcoercible
export default function requireObjectCoercible(it: any) {
  if(isNullOrUndefined(it)) throw new TypeError("Cannot call method on " + it);
  return it
}