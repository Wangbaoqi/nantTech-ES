
import globalObject from "./global";

export default function definedGlobalProperty(key: string, value: string) {
  try {
    Object.defineProperty(globalObject, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalObject[key] = value
  }
  return globalObject;
}