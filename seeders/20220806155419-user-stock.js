'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'UserStocks',
      [
        {
          userId: 1,
          stockId: 1,
        },
        {
          userId: 1,
          stockId: 2,
        },
        {
          userId: 2,
          stockId: 1,
        },
        {
          userId: 3,
          stockId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserStocks', null, {});
  },
};
