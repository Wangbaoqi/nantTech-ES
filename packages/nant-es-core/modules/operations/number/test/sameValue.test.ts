import { sameValue } from '../index'

describe('test sameValue of number operations', () => {

  it('same type value of number', () => {
    expect(sameValue(0, 1)).toBe(false)
    expect(sameValue(0, -1)).toBe(false)
    expect(sameValue(0, Infinity)).toBe(false)
    expect(sameValue(0, -Infinity)).toBe(false)
  })

  it('NaN value of number', () => {
    expect(sameValue(NaN, NaN)).toBe(true)
    expect(sameValue(0, NaN)).toBe(false)
    expect(sameValue(NaN, 0)).toBe(false)
  })

  it('Zero value of number', () => {
    expect(sameValue(0, 0)).toBe(true)
    expect(sameValue(0, -0)).toBe(false)
    expect(sameValue(-0, 0)).toBe(false)
  })

})