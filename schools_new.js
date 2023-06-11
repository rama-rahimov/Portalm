const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const schools_new = sequelize.define('schools_new', {
    id:{
        type: DataTypes.INTEGER(10) ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    student_cart_id:{
        type: DataTypes.STRING 
    },
    DIM_ID:{
        type: DataTypes.STRING 
    },
    DTS_ID:{
        type: DataTypes.STRING  
    },
    DM_NAME:{
        type: DataTypes.STRING  
    },
    name:{
        type: DataTypes.STRING
    },
    name_eng:{
        type: DataTypes.STRING
    },
    Abreviatura_AZE:{
        type: DataTypes.STRING
    },
    Abreviatura_ENG:{
        type: DataTypes.STRING
    },
    old_name:{
        type: DataTypes.STRING
    },
    org_id:{
        type: DataTypes.STRING
    },
    org_name:{
        type: DataTypes.STRING
    },
    org_old_name:{
        type: DataTypes.STRING
    },
    org_old_id:{
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.STRING
    }
});               

module.exports = { schools_new } ;