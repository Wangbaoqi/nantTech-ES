import { LanguageType } from "@/types/languageType";

// eslint-disable-next-line import/no-anonymous-default-export
export default function isNullOrUndefined(it: LanguageType) {
  return it === null || it === undefined
}