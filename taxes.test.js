const { getTaxes } = require( './taxes')

describe('getTaxes', () => {
  describe('when is an imported product', () => {
    describe('when product has the same name of a product in the catalog', () => {
      it('returns import duty tax when product is food', () => {
        expect(getTaxes(10, 'imported banana')).toEqual(0.5)
      })

      it('returns import duty tax when product is book', () => {
        expect(getTaxes(20.87, 'imported magazine')).toEqual(1.04)
      })

      it('returns import duty tax when product is a medical product', () => {
        expect(getTaxes(13.15, 'imported painkiller')).toEqual(0.66)
      })
    })

    describe('when product contains the name of a product in the catalog', () => {
      it('returns import duty tax when product is food', () => {
        expect(getTaxes(12, 'imported chocolate bar')).toEqual(0.6)
      })

      it('returns import duty tax when product is book', () => {
        expect(getTaxes(32.65, 'imported book collection')).toEqual(1.63)
      })

      it('returns import duty tax when product is a medical product', () => {
        expect(getTaxes(2.35, 'imported headache pills')).toEqual(0.12)
      })
    })

    describe('when product does not exist in the catalog', () => {
      it('returns price + basic sale tax', () => {
        expect(getTaxes(14.99, 'imported music CD')).toEqual(2.25)
      })
    })
  })

  describe('when is not an imported product', () => {
    describe('when product has the same name of a product in the catalog', () => {
      it('returns 0 when product is food', () => {
        expect(getTaxes(10, 'banana')).toEqual(0)
      })

      it('returns 0 when product is book', () => {
        expect(getTaxes(20.87, 'magazine')).toEqual(0)
      })

      it('returns 0 when product is a medical product', () => {
        expect(getTaxes(13.15, 'painkiller')).toEqual(0)
      })
    })

    describe('when product contains the name of a product in the catalog', () => {
      it('returns 0 when product is food', () => {
        expect(getTaxes(12, 'chocolate bar')).toEqual(0)
      })

      it('returns 0 when product is book', () => {
        expect(getTaxes(32.65, 'book collection')).toEqual(0)
      })

      it('returns 0 when product is a medical product', () => {
        expect(getTaxes(2.35, 'headache pills')).toEqual(0)
      })
    })

    describe('when product does not exist in the catalog', () => {
      it('returns price + basic sale tax', () => {
        expect(getTaxes(14.99, 'music CD')).toEqual(1.5)
      })
    })
  })
});
