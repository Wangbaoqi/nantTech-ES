import { LanguageType } from "@/types/languageType";
import toString from "@/internals/to-string";
import requireObjectCoercible from "@/internals/require-object-coercible";
import toIntegerOrInfinity from "@/internals/to-integer-or-infinity";

function NString(this: any, value: LanguageType) {
  if(this instanceof NString) return new String(value);
  return String(value)
}


// https://tc39.es/ecma262/#sec-string.prototype.at
NString.prototype.nAt = function(this: any, index: number) {
  const S = toString(requireObjectCoercible(this));
  const len = S.length;
  let relativeIndex = toIntegerOrInfinity(index);
  let k = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  return k < 0 || k >= len ? undefined : S[k];
}


// https://tc39.es/ecma262/#sec-string.prototype.charat
NString.prototype.nCharAt = function(this: any, pos: number) {
  const S = toString(requireObjectCoercible(this));
  let position = toIntegerOrInfinity(pos);
  let size = S.length;
  return position < 0 || position >= size ? '' : S.substring(position, position + 1);
}

