

// https://tc39.es/ecma262/#sec-tointegerorinfinity

import trunc from "./math-trunc";


// 抽象操作ToIntegerOrInfinity接受参数（ECMAScript语言值），并返回包含整数、+∞或-∞的正常完成或抛完成。它将参数转换为表示其数字值的整数，分数部分被截断，或者当数字值为无限时，将其转换为+∞或-∞。调用时，它会执行以下步骤：
export default function toIntegerOrInfinity(it: any) {
  const number = +it;
  return number !== number || number === 0 ? 0 : trunc(number)
}