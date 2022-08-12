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
    const stocks = await Stock.findAll();

    res.render('template', {
      locals: {
        stocks,
      },
      partials: {
        partial: '/partials/stocks',
      },
    });
  },

  async getAllByUserId(req, res) {
    const userId = req.session.user.id;
    const stocks = await Stock.findAll({
      attributes: ['name', 'category'],
      include: [
        {
          model: User,
          attributes: [],
          through: {
            where: {
              userId,
            },
          },
        },
      ],
    });

    res.render('template', {
      locals: {
        stocks,
      },
      partials: {
        partial: '/partials/my-stocks',
      },
    });
  },
};
