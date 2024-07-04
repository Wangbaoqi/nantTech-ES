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


// https://tc39.es/ecma262/#sec-string.prototype.charcodeat
NString.prototype.nCharCodeAt = function(this: any, pos: number) {
  const S = toString(requireObjectCoercible(this));
  let position = toIntegerOrInfinity(pos);
  let size = S.length;
  if(position < 0 || position >= size) return NaN;
  // Return the Number value for the numeric value of the code unit at index position within the String S.
  return S.charCodeAt(position);
}

// https://tc39.es/ecma262/#sec-string.prototype.codepointat
NString.prototype.nCodePointAt = function(this: any, pos: number) {
  const S = toString(requireObjectCoercible(this));
  let position = toIntegerOrInfinity(pos);
  let size = S.length;
  if(position < 0 || position >= size) return NaN;
  return S.codePointAt(position);
}

NString.prototype.nEndsWith = function(this: any, searchString: string, endPosition?: number) {
  const S = toString(requireObjectCoercible(this));
  const str = toString(searchString);
  let pos = endPosition === undefined ? S.length : toIntegerOrInfinity(endPosition);
  const len = S.length;
  if(pos < 0) return false;
  if(pos > len) pos = len;
  if(pos === len) return true;
  return S.slice(pos, len) === str;
}