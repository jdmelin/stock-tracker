'use strict';

const bcrypt = require('bcrypt');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Stock, {
        through: models.UserStock,
        foreignKey: 'userId',
        otherKey: 'stockId',
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      hooks: {
        async beforeCreate(user) {
          user.password = await bcrypt.hash(user.password, 10);
        },
      },
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
