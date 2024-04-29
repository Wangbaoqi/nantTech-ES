
import { LanguageType } from "@/types/languageType";
import functionUncurryThis from "./function-uncurry-this";
import toObject from "./to-object";

const hasOwnProperty = functionUncurryThis({}.hasOwnProperty)

// https://tc39.es/ecma262/#sec-hasownproperty
export default  Object.hasOwn || function hasOwn(O: LanguageType, P: PropertyKey) {
  return hasOwnProperty(toObject(O), P)
}