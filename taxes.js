const catalog = require('./catalog.json').catalog

const getImportDutyTax = productName =>
  productName.toLowerCase().split(' ').indexOf('imported') >= 0 ? 0.05 : 0

const getBasicSalesTax = (product) =>
  (catalog
    .find(category => category.products
                       .indexOf(product.replace('imported', '').replace(/^\s+/g, '')) >= 0)
  ||
  product
    .toLowerCase()
    .split(' ')
    .map(p =>
      catalog.find(category => category.products.indexOf(p) >= 0)
    )
    .filter(Boolean)
    .length > 0 ? { tax: 0 } : { tax: 0.1 }
  ).tax

const getTaxes = (total, product) =>
  Math.round(((total * getBasicSalesTax(product)) + (total * getImportDutyTax(product))) * 100) / 100

module.exports = { getTaxes }
