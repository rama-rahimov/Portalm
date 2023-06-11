const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Course_appeals = sequelize.define('course_appeals',{
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    country:{
        type: DataTypes.STRING
    },
    fin:{
        type: DataTypes.STRING
    },
    citizenship:{
        type: DataTypes.STRING
    },
    first_name:{
        type: DataTypes.STRING
    },
    last_name:{
        type: DataTypes.STRING
    },
    father_name:{
        type: DataTypes.STRING
    },
    birth_date:{
        type: DataTypes.STRING
    },
    borncity:{
        type: DataTypes.STRING
    },
    address:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    actual_address:{
        type: DataTypes.STRING
    },
    is_address_current:{
        type: DataTypes.STRING
    },
    genderId:{
        type: DataTypes.STRING
    },
    position_type:{
        type: DataTypes.STRING
    },
    dq_point:{
        type: DataTypes.STRING
    },
    miq_point:{
        type: DataTypes.STRING
    },
    user_id:{
        type: DataTypes.INTEGER(11)
    },
    status:{
        type: DataTypes.INTEGER(11)
    },
    step:{
        type: DataTypes.INTEGER(11)
    },
    country_code:{
        type: DataTypes.STRING
    },
    militaryService:{
        type: DataTypes.STRING
    },
    social_status:{
        type: DataTypes.STRING
    },
    social_scan:{
        type: DataTypes.STRING
    },
    actual_region:{
        type: DataTypes.STRING
    },
    lang:{
        type: DataTypes.STRING
    },
    training_date:{
        type: DataTypes.STRING
    },
    training_about:{
        type: DataTypes.STRING
    },
    training_about_text:{
        type: DataTypes.STRING
    },
    training_motivation:{
        type: DataTypes.STRING   
    }
});

module.exports = { Course_appeals } ;