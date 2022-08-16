'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    static associate(models) {
      Stock.belongsToMany(models.User, {
        through: models.UserStock,
        foreignKey: 'stockId',
        otherKey: 'userId',
      });
    }
  }
  Stock.init(
    {
      name: DataTypes.STRING,
      symbol: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Stock',
    }
  );
  return Stock;
};
