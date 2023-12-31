const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const services = sequelize.define('services', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    preference:{
        type: DataTypes.INTEGER(11)
    },
    name:{
        type: DataTypes.STRING ,
        allowNull: false ,
        defaultValue: '' 
    },
    redirect_url:{
        type: DataTypes.STRING ,
        allowNull: false ,
        defaultValue: ''
    },
    icon:{
        type: DataTypes.STRING ,
        allowNull: false ,
        defaultValue: ''
    },
    title:{
        type: DataTypes.STRING ,
        allowNull: false ,
        defaultValue: ''
    },
    titleEn:{
        type: DataTypes.STRING 
    },
    description:{
        type: DataTypes.STRING ,
        allowNull: false ,
        defaultValue: ''
    },
    descriptionEn:{
        type: DataTypes.STRING
    },
    is_test:{
        type: DataTypes.TINYINT(1),
        allowNull: true ,
        defaultValue: 0
    },
    is_global:{
        type: DataTypes.TINYINT(1),
        allowNull: true ,
        defaultValue: 0
    },
    is_finish:{
        type: DataTypes.TINYINT(1),
        allowNull: true ,
        defaultValue: 0
    },
    is_soon:{
        type: DataTypes.TINYINT(1),
        allowNull: true ,
        defaultValue: 0
    },
    is_translate:{
        type: DataTypes.TINYINT(1),
        allowNull: true ,
        defaultValue: 0
    }
});

module.exports = { services } ;