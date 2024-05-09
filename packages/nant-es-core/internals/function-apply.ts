
import globalObject from "./global";
import isNullOrUndefined from "./is-null-or-undefined";
import toObject from "./to-object";
import { IsCallable } from "./is-callable";

// https://tc39.es/ecma262/#sec-function.prototype.apply

interface CtxType {
  [key: string]: any
}

export function apply(this: Function, thisArg: any, arrArray: any): any {

  let ctx: CtxType;
  const func = this;

  if(!IsCallable(func)) throw new TypeError('caller must be a function');

  if(isNullOrUndefined(thisArg)) {
    ctx = globalObject
  }else {
    ctx = toObject(thisArg)
  }

  ctx['func'] = func;

  // perform PrepareForTailCall

  if(isNullOrUndefined(arrArray)) {
    arrArray = []
  }

  const result = ctx.func(...arrArray);

  delete ctx['func'];

  return result
}

