'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserStock extends Model {}
  UserStock.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      stockId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Stocks',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'UserStock',
      timestamps: false,
    }
  );
  return UserStock;
};
