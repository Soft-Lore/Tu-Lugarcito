'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Home_Types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type_of_rental: {
        type: Sequelize.ENUM,
        values: ["Solo habitacion", "Casa","Departamento"],
        defaultValue: "Casa",
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
    await queryInterface.dropTable('Home_Types');
  }
};