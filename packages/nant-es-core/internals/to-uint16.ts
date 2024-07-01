import type { LanguageType } from '@/types/languageType'

export const ToUint16 = (it: LanguageType) => {

  const number = Number(it); // actual ToNumber

  if(!isFinite(number) || isNaN(number) || number === 0) {
    return 0;
  }

  const int = Math.abs(number);

  const int16bit = int % 2**16;

  return Math.floor(int16bit)
}