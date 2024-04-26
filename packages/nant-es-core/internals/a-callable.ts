import { IsCallable } from "./is-callable";
import tryToString from "./try-to-string";

export default function aCallable(arg: any): boolean | TypeError {
  if(IsCallable(arg)) return arg;
  throw new TypeError(`${tryToString(arg)} must be a function`);
}