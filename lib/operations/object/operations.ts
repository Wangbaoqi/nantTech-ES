import { ESValueType, PropertyKey } from "../../types/valueType";
import { ToObject } from '../convertion'

export function Get(V: object, P: PropertyKey) {
  // 1. Return ? O.[[Get]](P, O).

  // return
}


export function GetV(V: ESValueType, P: PropertyKey) {
  let o = ToObject(V);
}


export function GetMethod(V: ESValueType, P: PropertyKey) {

}