const { round } = require( './round')

describe('round', () => {
  describe('when decimal is bigger than 0.05', () => {
    it('returns same value', () => {
        expect(round(24.98)).toEqual(24.98)
    })
  })

  describe('when decimal is rounded as 0.05', () => {
    it('returns same value', () => {
        expect(round(0.85)).toEqual(0.85)
    })
  })

  describe('when decimal is rounded as 0.00', () => {
    it('returns same value', () => {
        expect(round(47.50)).toEqual(47.50)
    })
  })

  describe('when decimal is smaller than 0.05', () => {
    it('returns rounded to 0.05', () => {
        expect(round(11.81)).toEqual(11.85)
    })
  })
})
