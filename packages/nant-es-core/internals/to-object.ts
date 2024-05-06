
import requireObjectCoercible from "./require-object-coercible";

// https://tc39.es/ecma262/#sec-toobject
export default function toObject(it: any) {
  return Object(requireObjectCoercible(it))
}