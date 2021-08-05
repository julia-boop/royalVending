'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('equipo', {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull:false,
            primaryKey: true,
            autoIncrement:true
        },
        nombre: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull:false
        }, 
        imagen: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull:false
        },
        dato1: {
            type: Sequelize.DataTypes.TEXT,
            allowNull:false
        },
        dato2: {
            type: Sequelize.DataTypes.TEXT,
            allowNull:true
        },
        dato3: {
            type: Sequelize.DataTypes.TEXT,
            allowNull:true
        },
        dato4: {
            type: Sequelize.DataTypes.TEXT,
            allowNull:true
        },
        dato5: {
            type: Sequelize.DataTypes.TEXT,
            allowNull:true
        },
        ficha_tecnica: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull:false
        },
        categoria_id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull:false,
            references: {
                model: 'categoria',
                key: 'id'
            }
        },
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('equipo')
  }
};