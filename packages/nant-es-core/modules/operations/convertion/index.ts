import { ESValueType } from '../../types/valueType';
import { Call, GetMethod } from '../object/operations';


export function stringToCodePoints(str: string): number[] {
  let codePoints = [];
  let size = str.length;
  let position = 0;
  while(position < size) {
    let cp = str.codePointAt(position);
    cp && codePoints.push(cp);
  }
  return codePoints;
}

export function stringToNumber(arg: string): number {
  let text = stringToCodePoints(arg);

  return 0
}


export function toPrimitive(input: ESValueType, preferredValue?: 'STRING' | 'NUMBER') {

  if(typeof input === 'object' && input !== null) {
    let exoticToPrim = GetMethod(input, '@@toPrimitive');

    if(exoticToPrim !== undefined) {
      let hint = 'default';
      if(preferredValue === 'STRING') {
        hint = 'string';
      }else {
        hint = 'number';
      }
      let result = Call(exoticToPrim, input, hint);
    }
  }

}

export function ToNumber(arg: ESValueType) {

  if(typeof arg === 'number') return arg;

  if(typeof arg === 'symbol' || typeof arg === 'bigint') {
    throw new Error('Cannot convert symbol or bigint to number.');
  }

  if(typeof arg === 'undefined') return NaN;

  if(arg === null && arg === false) return +0;

  if(arg === true) return 1;

  if(typeof arg === 'string') {
    return stringToNumber(arg)
  }

  if(typeof arg === 'object') {
    throw new Error('Cannot convert object to number');
  }

  let primValue = toPrimitive(arg)
}

export function ToInt32(arg: ESValueType) {

}


export function ToBoolean(arg: ESValueType) {
  if(typeof arg === 'boolean') return arg;

  if(
    arg === undefined ||
    arg === null ||
    arg === +0 ||
    arg === -0 ||
    isNaN(arg as number) ||
    arg === ''
  ) return false;

  if(typeof arg === 'object') {
    // if arg has [[IsHTMLDDA]] internal slot return false
    // * [[IsHTMLDDA]]内部插槽可能存在于主机定义的对象上。
    // * 具有[[IsHTMLDDA]]内部插槽的对象在ToBoolean和IsLooselyEqual抽象操作中的行为类似于未定义，当用作typeof运算符的操作数时。
  }

  return true
}


export function ToObject(arg: ESValueType) {

  if(typeof arg === 'undefined' || arg === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  if(typeof arg === 'number') {
    return new Number(arg)
  }

  if(typeof arg === 'string') {
    return new String(arg)
  }

  if(typeof arg === 'boolean') {
    return new Boolean(arg)
  }

  if(typeof arg === 'bigint') {
    return BigInt(arg)
  }

  if(typeof arg === 'symbol') {
    return arg
  }

  return arg
}