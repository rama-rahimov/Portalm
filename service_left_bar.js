const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const service_left_bar = sequelize.define('service_left_bar', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        autoIncrement: true ,
        allowNull: false ,
        primaryKey: true
    },
    service_name:{
        type: DataTypes.STRING(100),
        allowNull: false ,
        defaultValue: ''
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false ,
        defaultValue: ''
    },
    titleEn:{
        type: DataTypes.STRING,
    },
    url:{
        type: DataTypes.STRING,
        allowNull: false ,
        defaultValue: ''
    },
    includes:{
        type: DataTypes.STRING,
        allowNull: false ,
        defaultValue: ''
    },
    is_equals:{
        type: DataTypes.TINYINT(1).UNSIGNED ,
        allowNull: false ,
        defaultValue: 0
    }
});

module.exports = { service_left_bar } ;