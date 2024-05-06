
import globalObject from "./global"

export function applyN(this: any, ctx: any, thisArg: any) {

  ctx = ctx || globalObject;

  ctx['nApply'] = this;

  const result = ctx['nApply'](...thisArg);

  delete ctx['nApply'];

  return result
}

