const { Stock, User, UserStock } = require('../models');

module.exports = {
  async create(req, res) {
    const { name, category } = req.body;

    const newStock = await Stock.create({
      name,
      category,
    });

    res.json(newStock);
  },

  async createUserStock(req, res) {
    const { userId, stockId } = req.params;

    const newUserStock = await UserStock.create({
      userId,
      stockId,
    });

    res.json(newUserStock);
  },

  async getAll(req, res) {
    const stocks = await Stock.findAll({ include: User });

    res.render('template', {
      locals: {
        stocks,
      },
      partials: {
        partial: '/partials/stocks',
      },
    });
  },
};
