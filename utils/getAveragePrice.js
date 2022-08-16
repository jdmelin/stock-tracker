module.exports = (stocks) => {
  const sum = stocks.reduce((acc, item) => {
    acc += item.price;
    return acc;
  }, 0);
  const average = (sum / stocks.length).toFixed(2);

  return average;
};
