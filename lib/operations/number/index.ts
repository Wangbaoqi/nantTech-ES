// 6.1.6.1 Number Type

import { ESZeroType } from '../../types/valueType';
import { isNaN, isNegativeZero } from '../../utils'

// 6.1.6.1.14 Number::sameValue(x, y)


// number sameValue
// 同值比较 Object.is 的应用
export function sameValue(x: number, y: number): boolean {

  // x = NaN y = NaN
  if(isNaN(x) && isNaN(y)) return true;

  // x = +0 && y = -0
  // x = -0 && y = +0
  if(
    (!isNegativeZero(x as ESZeroType) && isNegativeZero(y as ESZeroType)) ||
    (isNegativeZero(x as ESZeroType) && !isNegativeZero(y as ESZeroType))
  ) return false;

  return x === y
}

// 零值比较
export function sameValueZero(x: number, y: number): boolean {
  // (x !== x && y !== y) like isNaN(x) isNaN(y)
  return x === y || (x !== x && y !== y)
}


export function equal(x: number, y: number): boolean {
  // for NaN values
  if(x !== x || y !== y) return false;
  return x === y
}