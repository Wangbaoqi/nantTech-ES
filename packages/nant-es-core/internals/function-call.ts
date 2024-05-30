import { IsCallable } from './is-callable';
import globalObject from './global';
import isNullOrUndefined from './is-null-or-undefined';
import toObject from './to-object';

import unCurryThis from './function-uncurry-this';

interface CtxType {
  [key: string]: any
}

export function call(this: Function, thisArg: any, ...args: any[]): any {

  let ctx: CtxType;
  const func = this;

  if(!IsCallable(func)) throw new TypeError('func must be a function');

  if(isNullOrUndefined(thisArg)) {
    ctx = globalObject
  }else {
    ctx = toObject(thisArg)
  }

  ctx['func'] = func;

  // Perform PrepareForTailCall
  const result =  ctx.func(args);

  // delete ctx['func'];
  delete ctx['func'];

  return result;
}


export default unCurryThis(unCurryThis.call)