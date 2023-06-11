const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const out_of_school_centers = sequelize.define('out_of_school_centers', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    direction:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    circle:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    enterprise:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    city:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    region:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    address:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    locationLat:{
        type: DataTypes.DOUBLE(22,5)
    },
    locationLon:{
        type: DataTypes.DOUBLE(22,5)
    },
    utis_id:{
        type: DataTypes.STRING
    },
    phone1:{
        type: DataTypes.STRING
    },
    phone2:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    director:{
        type: DataTypes.STRING
    },
    min_age:{
        type: DataTypes.STRING ,
        defaultValue: '0'
    },
    min_age_2:{
        type: DataTypes.STRING ,
        defaultValue: '0'
    }
});

module.exports =  { out_of_school_centers } ;