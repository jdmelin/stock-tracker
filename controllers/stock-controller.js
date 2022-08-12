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
        loggedIn: req.session.user,
        stocks,
      },
      partials: {
        partial: '/partials/stocks',
      },
    });
  },

  async getAllByUserId(req, res) {
    const { id } = req.session.user;
    const user = await User.findByPk(id, {
      include: {
        model: Stock,
        as: 'stocks',
        attributes: ['id', 'name', 'category'],
        through: {
          attributes: [],
        },
      },
    });
    const stocks = user.stocks.map((stock) => stock.get({ plain: true }));

    res.render('template', {
      locals: {
        loggedIn: req.session.user,
        stocks,
      },
      partials: {
        partial: '/partials/my-stocks',
      },
    });
  },
};
