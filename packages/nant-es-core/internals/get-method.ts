import { LanguageType } from "@/types/languageType";
import getValue from "./get-value";
import isNullOrUndefined from "./is-null-or-undefined";
import aCallable from "./a-callable";

// https://tc39.es/ecma262/#sec-getmethod
export default function getMethod<T extends LanguageType, K extends keyof T>(V: T, P: K) {
  const func = getValue(V, P);
  if(isNullOrUndefined(func)) return undefined;
  return aCallable(func);
}