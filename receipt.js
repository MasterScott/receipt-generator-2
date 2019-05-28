const { getTaxes } = require( './taxes')
const { round } = require( './round')

const hasError = product => isNaN(product.qtd) || isNaN(product.price)

const isNumber = value => !isNaN(parseFloat(value)) && !isNaN(value - 0)

const generateListOfProducts = list =>
  list.map(product => ({
    name: product.substr(product.indexOf(' ') + 1).split(' at')[0],
    qtd: isNumber(product.split(' ')[0]) ? parseInt(product.split(' ')[0]) : NaN,
    price: isNumber(product.split(' ')[product.split(' ').length - 1]) ? parseFloat(product.split(' ')[product.split(' ').length - 1]) : NaN
  }))

const generateReceipt = list => {
  let total = 0
  let totalTaxes = 0
  const receipt = { products: [], total: 0, taxes: 0 }

  generateListOfProducts(JSON.parse(list))
    .map(({ name, price, qtd }) => {
      if(hasError({price, qtd})) { console.log(`Product ${name} with error`); return; }

      const taxes = getTaxes(price, name)
      const itemTotal = parseFloat((round(price.toFixed(2)) * qtd))
      const itemTotalWithTaxes = parseFloat((round((price + taxes).toFixed(2)) * qtd))

      receipt.total = receipt.total + itemTotalWithTaxes
      receipt.taxes = round(receipt.taxes + (itemTotalWithTaxes - itemTotal))

      receipt.products.push(`${qtd} ${name}: ${itemTotalWithTaxes.toFixed(2)}`)
    })
    
    return receipt
}

module.exports = { generateReceipt }
