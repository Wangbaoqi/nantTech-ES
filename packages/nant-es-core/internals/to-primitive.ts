import { LanguageType } from '@/types/languageType';
import isObject from './is-object';
import isSymbol from './is-symbol';

export default function toPrimitive(input: LanguageType, pref?: 'STRING' | 'NUMBER') {

  if(!isObject(input) || isSymbol(input)) return input;

  // let exoticToPrim = getMethod(input, '@@toPrimitive');
}