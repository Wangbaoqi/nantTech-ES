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

// number equal
export function equal(x: number, y: number): boolean {
  // for NaN values
  if(x !== x || y !== y) return false;
  return x === y
}

// number add
export function add(x: number, y: number): number {
  // If x is NaN or y is NaN, return NaN.
  if(isNaN(x) || isNaN(y)) return NaN;
  // If x is +∞𝔽 and y is -∞𝔽, return NaN.
  // If x is -∞𝔽 and y is +∞𝔽, return NaN.
  if(x === Infinity && y === -Infinity || x === -Infinity && y === Infinity) return NaN;

  // If x is either +∞𝔽 or -∞𝔽, return x.
  if(x === Infinity || x === -Infinity) return x;
  // If y is either +∞𝔽 or -∞𝔽, return y.
  if(y === Infinity || y === -Infinity) return y;

  // Assert: x and y are both finite.
  if(!isFinite(x) || !isFinite(y)) {
    throw new Error('Assertion failed: x and y must be finite.')
  }
  // If x is -0𝔽 and y is -0𝔽, return -0𝔽.
  if(isNegativeZero(x as ESZeroType) && isNegativeZero(y as ESZeroType)) return -0;
  // Otherwise, return x + y.
  return x + y
}

