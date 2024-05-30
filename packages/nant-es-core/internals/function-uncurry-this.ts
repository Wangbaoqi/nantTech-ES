const callNative = Function.prototype.call;

export default (callNative.bind as any as (this: Function, thisArg: any, ...args: any[]) => any).bind(callNative, callNative);
