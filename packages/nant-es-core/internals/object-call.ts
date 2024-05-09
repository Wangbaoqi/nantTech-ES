import type { LanguageType } from '@/types/languageType';
import {IsCallable} from './is-callable';

// https://tc39.es/ecma262/#sec-call

export function objectCall(F: LanguageType, V: LanguageType, argumentLists?: LanguageType[]) {
  if(!argumentLists) argumentLists = [];
  if(!IsCallable(F)) throw new TypeError('F must be a function');
  return (F as unknown as Function).call(V, ...argumentLists);
}
