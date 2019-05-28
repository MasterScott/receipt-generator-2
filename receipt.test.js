const { generateReceipt } = require( './receipt')

describe('generateReceipt', () => {
  it('returns the receipt to input', () => {
    const input = '["2 book at 12.49", "1 music CD at 14.99", "1 chocolate bar at 0.85"]'
    const output = {
      products: ["2 book: 24.98", "1 music CD: 16.49", "1 chocolate bar: 0.85"],
      total: 42.32,
      taxes: 1.5
    }

    expect(generateReceipt(input)).toEqual(output)
  })

  it('returns the receipt to input', () => {
    const input = '["1 imported box of chocolates at 10.00", "1 imported bottle of perfume at 47.50"]'
    const output = {
      products: ["1 imported box of chocolates: 10.50", "1 imported bottle of perfume: 54.65"],
      total: 65.15,
      taxes: 7.65
    }

    expect(generateReceipt(input)).toEqual(output)
  })

  it('returns the receipt to input', () => {
    const input = '["1 imported bottle of perfume at 27.99", "1 bottle of perfume at 18.99", "1 packet of headache pills at 9.75", "3 box of imported chocolates at 11.25"]'
    const output = {
      products: ["1 imported bottle of perfume: 32.19", "1 bottle of perfume: 20.89", "1 packet of headache pills: 9.75", "3 box of imported chocolates: 35.55"],
      total: 98.38,
      taxes: 7.9
    }

    expect(generateReceipt(input)).toEqual(output)
  })
})
