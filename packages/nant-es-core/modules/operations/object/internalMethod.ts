import { LanguageType, PropertyKey } from "@/types/languageType";


// alias [[GET]]
export function OrdinaryGet(O: object, P: PropertyKey, Receiver: LanguageType) {

}

export function OrdinaryGetOwnProperty(O: object, P: PropertyKey) {
  // 1. Let obj be ? ToObject(O).
  // 2. Return ? obj.[[GetOwnProperty]](P).
}