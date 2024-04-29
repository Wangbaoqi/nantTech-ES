import { LanguageType } from "@/types/languageType";


export default function isSymbol(it: LanguageType): boolean {
  return typeof it === 'symbol'
}