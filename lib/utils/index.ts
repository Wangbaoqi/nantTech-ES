

// -0 and 0
export function isNegativeZero(value: 0 | -0): boolean {
  return 1/value === -Infinity
}

// NaN only don't equal with self in ES.
export function isNaN(value: number): boolean {
  return value !== value
}