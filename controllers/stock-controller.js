const { Stock, User, UserStock } = require('../models');
const getAveragePrice = require('../utils/getAveragePrice');
const getStockPrice = require('../utils/getStockPrice');

module.exports = {
  async create(req, res) {
    const { name, symbol } = req.body;

    try {
      const newStock = await Stock.create({
        name,
        symbol,
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
      const userId = req.session.user.id;

      const allStocks = await Stock.findAll({
        attributes: ['id', 'name', 'symbol'],
        order: [['name', 'asc']],
      });
      const userStocks = await UserStock.findAll({ where: { userId } });

      const stocks = allStocks.map((stock) => stock.get({ plain: true }));

      const favorites = userStocks.reduce((favs, userStock) => {
        if (userStock.userId === userId) {
          favs.push(userStock.stockId);
        }

        return favs;
      }, []);

      for (const stock of stocks) {
        const isFavorite = favorites.includes(stock.id);
        stock.favorite = isFavorite;
        stock.price = await getStockPrice(stock.symbol);
      }

      const average = getAveragePrice(stocks);

      res.render('template', {
        locals: {
          loggedIn: req.session.user,
          average,
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
        order: [[{ model: Stock, as: 'stocks' }, 'name', 'asc']],
        include: {
          model: Stock,
          as: 'stocks',
          attributes: ['id', 'name', 'symbol'],
          through: {
            attributes: [],
          },
        },
      });

      const stocks = user.stocks.map((stock) => stock.get({ plain: true }));

      for (const stock of stocks) {
        stock.price = await getStockPrice(stock.symbol);
      }

      const average = getAveragePrice(stocks);

      res.render('template', {
        locals: {
          loggedIn: req.session.user,
          average,
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
