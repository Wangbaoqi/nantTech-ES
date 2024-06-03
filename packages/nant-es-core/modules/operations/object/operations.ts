import { LanguageType, ObjectSelf, PropertyKey } from "@/types/languageType";
import { ToObject } from '../convertion'

export function Get(V: object, P: PropertyKey) {
  // 1. Return ? O.[[Get]](P, O).

  // return
}


export function GetV(V: LanguageType, P: PropertyKey) {
  let O = ToObject(V);
  // Return ? O.[[Get]](P, V).
}


export function GetMethod(V: LanguageType, P: PropertyKey) {

  // 1. If V has a [[Get]] internal method, then
  // 1. a. Return V.[[Get]](P).

  let func = GetV(V, P);

  if(typeof func === undefined || func === null) return undefined;

  // if(!IsCallable(func)) {
  //   throw new TypeError('func must be a function');
  // }

}

export function IsCallable(argument: LanguageType): boolean {
  // 1. If argument is not an Object, return false.
  if(typeof argument !== 'object' || argument === null) return false;
  // 2. If argument has a [[Call]] internal method, return true.
  return true;
}

export function Call(F: LanguageType, V: LanguageType, ...args: LanguageType[]) {
  // 1. Let obj be ? ToObject(V).
  // 2. Return ? F.[[Call]](obj, F, args).

  if(!args) {
    args = [];
  }

  if(typeof F !== 'function') {
    throw new TypeError('F must be a function');
  }
  return F.call(null, V, ...args);

}