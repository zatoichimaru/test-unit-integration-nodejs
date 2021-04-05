'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.createTable("users", {
            id: {
                type: Sequelize.STRING,
                primaryKey: true,
                allowNull: false
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            status: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: new Date()
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: true
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.dropTable("users");
    }
};
