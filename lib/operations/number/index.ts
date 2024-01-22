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

export function unaryMinus(x: number): number {
  if(isNaN(x)) return NaN;
  return -x
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

export function subtract(x: number, y: number): number {
  return add(x, unaryMinus(y))
}

export function multiply(x: number, y: number): number {

  // 1. If x is NaN or y is NaN, return NaN.
  if(isNaN(x) && isNaN(y)) return NaN;

  if(x === -Infinity || x === Infinity) {
    if(isNegativeZero(y as ESZeroType) || !isNegativeZero(y as ESZeroType)) return NaN;
    if(y > 0) return x;
    return -x
  }

  if(y === -Infinity || y === Infinity) {
    if(isNegativeZero(x as ESZeroType) || !isNegativeZero(x as ESZeroType)) return NaN;
    if(x > 0) return y;
    return -y
  }

  if(isNegativeZero(x as ESZeroType)) {
    if(isNegativeZero(y as ESZeroType) || y < 0) return 0;
    return -0
  }

  if(isNegativeZero(y as ESZeroType)) {
    if(isNegativeZero(x as ESZeroType) || x < 0) return 0;
    return -0
  }

  return x * y
}

// 2 / 4
export function divide(x: number, y: number): number {

  // 1. If x is NaN or y is NaN, return NaN.
  if(isNaN(x) && isNaN(y)) return NaN;

  if(x === -Infinity || x === Infinity) {
    if(y === -Infinity || y === Infinity) return NaN;
    if(y >= 0) return x;
    return -x
  }

  if(y === -Infinity) {
    if(!isNegativeZero(x as ESZeroType) || x > +0) return -0;
    return +0
  }

  if(y === Infinity) {
    if(!isNegativeZero(x as ESZeroType) || x > +0) return +0;
    return -0
  }

  if(isNegativeZero(x as ESZeroType) || !isNegativeZero(x as ESZeroType)) {
    if(isNegativeZero(y as ESZeroType) || !isNegativeZero(y as ESZeroType)) return NaN;
    if(y > +0) return x;
    return -x
  }

  // 1/0
  // -1/0
  if(!isNegativeZero(y as ESZeroType)) {
    if(x > 0) return +Infinity
    return -Infinity
  }

  // 1/-0
  // -1/-0
  if(isNegativeZero(y as ESZeroType)) {
    if(x > 0) return -Infinity
    return +Infinity
  }

  return x / y;
}

// 2 % 4
export function reminder(n: number, d: number): number {

  // 1. If n is NaN or d is NaN, return NaN.
  if(isNaN(n) || isNaN(d)) return NaN;

  if(n === Infinity || n === -Infinity) return NaN;

  if(d === Infinity || d === -Infinity) return n;

  if(isNegativeZero(d as ESZeroType) || !isNegativeZero(d as ESZeroType)) return NaN;

  if(isNegativeZero(n as ESZeroType) || !isNegativeZero(n as ESZeroType)) return n;

  if(n === 0 || d === 0 || !isFinite(d) || !isFinite(n)) {
    throw new Error('Assertion failed: n and d must be finite.')
  }

  let quotient = n / d;

  // 数学函数截断（x）通过向零四舍五入去除x的分数部分，如果x < 0，则产生-floor（-x），否则产生floor（x）。
  let q = quotient < 0 ? -Math.floor(-quotient) : Math.floor(quotient);

  let r = n - (d * q);

  if(r === 0 && n < -0) return -0;

  return r;
}

export function bitwiseNot(x: number) {
  // let oldValue =
}

