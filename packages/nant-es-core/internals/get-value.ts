import { LanguageType } from "@/types/languageType";
import toObject from "./to-object";

// https://tc39.es/ecma262/#sec-getv
export default function getValue<T extends LanguageType, K extends keyof T>(V: T, P: K) {
  const O = toObject(V);
  return O[P]
}