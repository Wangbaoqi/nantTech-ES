
import uncurryThis from "./internals/function-uncurry-this"

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

export default function classof(value: any) {
  return stringSlice(toString(value), 8, -1);
}