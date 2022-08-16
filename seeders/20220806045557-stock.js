'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Stocks',
      [
        {
          name: 'Snowflake',
          symbol: 'SNOW',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Datadog',
          symbol: 'DDOG',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Okta',
          symbol: 'OKTA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'CyberArk',
          symbol: 'CYBR',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jamf',
          symbol: 'JAMF',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Salesforce',
          symbol: 'CRM',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Microsoft',
          symbol: 'MSFT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ping Identity',
          symbol: 'PING',
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
