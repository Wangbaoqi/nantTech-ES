
import globalObject from "./global"

// https://tc39.es/ecma262/#sec-function.prototype.apply

export function apply(this: any, thisArg: any, arrArray: any) {

  const func = this;

  ctx = ctx || globalObject;

  ctx['nApply'] = this;

  const result = ctx['nApply'](...thisArg);

  delete ctx['nApply'];

  return result
}

