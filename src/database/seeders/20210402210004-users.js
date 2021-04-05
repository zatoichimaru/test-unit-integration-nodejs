'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('users', [{
            id: uuidv4(),
            email: "contato@williamtenorio.com.br",
            password: "123123"
        }], {});
    
  },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {});     
    }
};
