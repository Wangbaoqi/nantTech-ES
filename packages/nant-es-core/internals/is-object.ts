import { IsCallable } from "./is-callable";

export default function isObject(arg: any): boolean {
  return typeof arg === 'object' ? arg !== null : IsCallable(arg);
}