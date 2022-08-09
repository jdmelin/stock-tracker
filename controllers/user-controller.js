const { User, Stock } = require('../models');

module.exports = {
  async create(req, res) {
    const { firstName, lastName, email } = req.body;
    const newUser = await User.create({
      firstName,
      lastName,
      email,
    });

    res.json(newUser);
  },

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
      const oneUser = await User.findByPk(req.params.id);

      if (oneUser === null) {
        res.status(404).json({
          message: 'User not found',
        });
      }

      res.json(oneUser);
    } catch (error) {
      console.log(error);
    }
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
