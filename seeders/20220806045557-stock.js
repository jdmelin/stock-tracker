'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Stocks',
      [
        {
          name: 'SNOW',
          category: 'SaaS',
          price: 168.68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'DDOG',
          category: 'SaaS',
          price: 115.72,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'OKTA',
          category: 'SaaS',
          price: 104.15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stocks', null, {});
  },
};
