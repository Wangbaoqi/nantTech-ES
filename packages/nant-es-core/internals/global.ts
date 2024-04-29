
const check = (it: any) => {
  return it && it.Math === Math && it
}

const globalObject =
  // web env and nodejs env
  check(typeof globalThis === 'object' && globalThis) ||
  // web env
  check(typeof window === 'object' && window) ||
  // web env
  check(typeof self === 'object' && self) ||
  // nodejs env
  check(typeof global === 'object' && global) ||
  // web env and nodejs env
  check(typeof this === 'object' && this) ||
  // (function() { return this as any; })() ||
  Function('return this')();

export default globalObject