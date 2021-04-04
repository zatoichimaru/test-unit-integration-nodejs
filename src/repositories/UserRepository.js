const { QueryTypes } = require('sequelize');

module.exports = new class UserRepository {
    async findOne({}){
        const projects = await sequelize.query('SELECT * FROM projects', {
            model: Projects,
            mapToModel: true // pass true here if you have any mapped fields
          });
    }
}