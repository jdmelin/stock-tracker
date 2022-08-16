require('dotenv').config();
const fetch = require('node-fetch');

module.exports = async (symbol) => {
  const apiKey = process.env.FINNHUB_API_KEY;

  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
    );
    const { c } = await response.json();
    return c;
  } catch {
    return 0;
  }
};
