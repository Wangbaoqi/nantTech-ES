
import requireObjectCoercible from "./require-object-coercible";

export default function toObject(it: any) {
  return Object(requireObjectCoercible(it))
}