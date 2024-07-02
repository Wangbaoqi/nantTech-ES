import classof from "@/classof";
import requireObjectCoercible from "./require-object-coercible";


// https://tc39.es/ecma262/#sec-tostring

export default function toString(it: any) {
  if(classof(it) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string')
  return String(requireObjectCoercible(it))
}

