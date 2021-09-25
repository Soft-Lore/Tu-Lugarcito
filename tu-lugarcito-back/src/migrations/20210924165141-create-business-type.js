'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Business_Types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      offer: {
        type: Sequelize.ENUM,
        values: ["alquiler", "venta"],
        defaultValue: "venta",
      },
      estate_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Estates",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Business_Types');
  }
};