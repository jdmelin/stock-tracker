const { Stock, User, UserStock } = require('../models');

module.exports = {
  async create(req, res) {
    const { name, category } = req.body;

    try {
      const newStock = await Stock.create({
        name,
        category,
      });

      res.json(newStock);
    } catch {
      // handle error
    }
  },

  async createUserStock(req, res) {
    const userId = req.session.user.id;
    const { stockId } = req.params;

    try {
      await UserStock.create({
        userId,
        stockId,
      });
      res.json({ message: 'success' });
    } catch {
      res.json({ message: 'failure' });
    }
  },

  async getAll(req, res) {
    try {
      const allStocks = await Stock.findAll({
        attributes: ['id', 'name', 'category'],
      });
      const stocks = allStocks.map((stock) => stock.get({ plain: true }));

      res.render('template', {
        locals: {
          loggedIn: req.session.user,
          stocks,
        },
        partials: {
          partial: '/partials/stocks',
        },
      });
    } catch {
      // handle error
    }
  },

  async getAllByUserId(req, res) {
    const { id } = req.session.user;

    try {
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
    } catch {
      // handle error
    }
  },

  async removeUserStock(req, res) {
    const userId = req.session.user.id;
    const { stockId } = req.params;

    try {
      await UserStock.destroy({
        where: {
          userId,
          stockId,
        },
      });
      res.json({ message: 'success' });
    } catch {
      res.json({ message: 'failure' });
    }
  },
};
