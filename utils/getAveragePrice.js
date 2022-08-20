module.exports = (stocks) => {
  const sum = stocks.reduce((total, stock) => {
    total += stock.price;
    return total;
  }, 0);
  const average = (sum / stocks.length).toFixed(2);

  return average;
};
