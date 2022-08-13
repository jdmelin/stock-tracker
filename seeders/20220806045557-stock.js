'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Stocks',
      [
        {
          name: 'SNOW',
          category: 'SaaS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'DDOG',
          category: 'SaaS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'OKTA',
          category: 'SaaS',
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
