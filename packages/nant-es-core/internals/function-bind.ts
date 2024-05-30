import aCallable from "./a-callable";

// https://tc39.es/ecma262/#sec-function.prototype.bind
export default function bind(thisArg: Function, ...args: any[]) {

  // 1. Let Target be the this value
  const Target = thisArg;

  // 2. If IsCallable(Target) is false, throw a TypeError exception.
  aCallable(Target)

  // 3. Let F be ? BoundFunctionCreate(Target, thisArg, args).

  const F = function (...newArgs: any[]) {
    return Target.apply(null, [...args, ...newArgs])
  }

  return F
}
