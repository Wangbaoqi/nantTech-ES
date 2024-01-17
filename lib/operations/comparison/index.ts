// 7.2 Testing and Comparison Operations

import { ESValueType } from '../../types/valueType'
import {
  sameValue as numberSameValue,
  equal as numberEqual
} from "../number";
import { bigIntEqual } from '../bigInt';

// 7.2.10 SameValue

export function sameValue(x: ESValueType, y: ESValueType): boolean {
  if(typeof x !== typeof y) return false;

  if(typeof x === 'number' && typeof y === 'number') {
    return numberSameValue(x, y);
  }

  return sameValueNonNumber(x as Omit<ESValueType, 'number'>, y as Omit<ESValueType, 'number'>);
}

// 7.2.11 sameValueNonNumber
export function sameValueNonNumber(x: Omit<ESValueType, 'number'>, y: Omit<ESValueType, 'number'>) {

  // Assert: Type(x) is Type(y).
  if (typeof x !== typeof y) {
    throw new Error("Type of x must be the same as the type of y");
  }

  // If x is either null or undefined, return true.
  if (x === null || x === undefined) {
    return true;
  }

  // If x is a BigInt, then return BigInt::equal(x, y).
  if (typeof x === 'bigint') {
    return BigInt.equal(x, y); // Assuming BigInt has an equal method
  }

  // NOTE: All other ECMAScript language values are compared by identity.
  // If x is y, return true; otherwise, return false.
  return x === y
}

export function isStrictlyEqual(x: ESValueType, y: ESValueType): boolean {
  if(typeof x !== typeof y) return false;

  if(typeof x === 'number' && typeof y === 'number') {
    return numberEqual(x, y);
  }

  return sameValueNonNumber(x as Omit<ESValueType, 'number'>, y as Omit<ESValueType, 'number'>);
}