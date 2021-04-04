const { Model, DataTypes } = require('sequelize');

module.exports = class Users extends Model {
    static init(sequelize) {
        super.init({
            username: DataTypes.STRING,
            password: DataTypes.STRING
        },{
            sequelize
        })
    }

    static associate(models) {
        //this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
      }
} 