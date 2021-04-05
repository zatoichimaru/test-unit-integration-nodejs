const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define(
        "Users",
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            status: DataTypes.BOOLEAN
        });

    return Users;
};