
const ceil = Math.ceil;
const floor = Math.floor;

// https://tc39.es/ecma262/#sec-math.trunc
export default function trunc(x: number) {
  const n = +x;
  return n > 0 ? floor(x) : ceil(x);
}