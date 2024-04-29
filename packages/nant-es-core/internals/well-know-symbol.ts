
import globalObject from "./global"
import shared from "./shared"
import hasOwnProperty from "./has-own-property"

export default function wellKnowSymbol(name: string) {
  return Symbol.for(name)
}