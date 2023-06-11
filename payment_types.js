const {sequelize} = require('../db');
const {DataTypes, SequelizeScopeError} = require('sequelize');

const payment_types = sequelize.define('payment_types', {
    id:{
        type: DataTypes.DOUBLE.UNSIGNED ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(100)
    },
    nameEn:{
        type: DataTypes.STRING(100)
    }
});

module.exports = { payment_types } ;