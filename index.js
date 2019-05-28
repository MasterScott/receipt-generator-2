const { generateReceipt } = require( './receipt')

const printReceipt = list => {
  const receipt = generateReceipt(list)

  receipt.products.map(product => console.log(product))
  
  console.log(`Sales Taxes: ${receipt.taxes}`)
  console.log(`Total: ${receipt.total}`)
}

printReceipt(process.argv[2])

