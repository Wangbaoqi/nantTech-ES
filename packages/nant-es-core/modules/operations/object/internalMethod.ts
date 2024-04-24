import { ESValueType, PropertyKey } from "../../types/valueType";


// alias [[GET]]
export function OrdinaryGet(O: object, P: PropertyKey, Receiver: ESValueType) {

}

export function OrdinaryGetOwnProperty(O: object, P: PropertyKey) {
  // 1. Let obj be ? ToObject(O).
  // 2. Return ? obj.[[GetOwnProperty]](P).
}