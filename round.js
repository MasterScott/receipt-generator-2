const round = value => {
  const decimal = Number(Math.round(value+'e2')+'e-2').toString()

  if (decimal.split('.').length === 1 ||
      decimal.split('.')[1].length < 2 ||
      parseInt(decimal.substr(decimal.length - 1)) === 5 ||
      parseInt(decimal.substr(decimal.length - 1)) === 0)
  {
    return parseFloat(Number(Math.round(value+'e2')+'e-2'))
  }

  if (parseInt(decimal.substr(decimal.length - 1)) < 5) {
    return parseFloat(decimal.substr(0, decimal.length - 1) + '5')
  }
  else {
    return parseFloat(Number(Math.round(value+'e2')+'e-2'))
  }
}

module.exports = { round }
