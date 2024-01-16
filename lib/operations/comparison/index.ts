// 7.2 Testing and Comparison Operations

import { ESValueType } from '../../types/valueType'
import { sameValue as numberSameValue } from "../number";
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

  if(typeof x === typeof y) {
    // null and undefined
    if(x === null || x === undefined) return true;

    if(typeof x === 'bigint' && typeof y === 'bigint') return bigIntEqual(x, y);

    // other language value are compared by identity
  }
  return x === y

}