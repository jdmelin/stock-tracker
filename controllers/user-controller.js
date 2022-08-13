const bcrypt = require('bcrypt');
const { User, Stock } = require('../models');

module.exports = {
  async deleteUser(req, res) {
    const { id } = req.params;

    const deletedUser = await User.destroy({
      where: {
        id,
      },
    });

    res.json(deletedUser);
  },

  async getAll(req, res) {
    const users = await User.findAll({ include: Stock });
    res.json(users);
  },

  async getOne(req, res) {
    try {
      const oneUser = await User.findByPk(req.params.id, { include: Stock });

      if (oneUser === null) {
        res.status(404).json({
          message: 'User not found',
        });
      }

      res.json(oneUser);
    } catch (error) {
      res.json(error);
    }
  },

  async logIn(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({
        where: { email },
      });

      bcrypt.compare(password, user.password, (err, match) => {
        if (match) {
          req.session.user = user;
          res.json('success');
        } else {
        }
      });
    } catch {
      res.json('failure');
    }
  },

  async register(req, res) {
    await User.create(req.body);

    res.json('success');
  },

  async update(req, res) {
    const { id } = req.params;

    const updatedUser = await User.update(req.body, {
      where: {
        id,
      },
    });

    res.json(updatedUser);
  },
};
