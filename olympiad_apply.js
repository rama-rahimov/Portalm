const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const olympiad_apply = sequelize.define('olympiad_apply', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        allowNull: false ,
        primaryKey: true ,
        autoIncrement: true
    },
    step:{
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    status:{
        type: DataTypes.TINYINT(2),
        allowNull: false ,
        defaultValue: 0
    },
    user_id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false 
    },
    child_id:{
        type: DataTypes.INTEGER(11) 
    },
    olympiad_process_id:{
        type: DataTypes.INTEGER(11).UNSIGNED 
    },
    olympiad_type:{
        type: DataTypes.TINYINT(3).UNSIGNED 
    },
    citizenship:{
        type: DataTypes.STRING
    },
    fin:{
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
    address:{
        type: DataTypes.STRING
    },
    is_address_current:{
        type: DataTypes.TINYINT(1)
    },
    actual_address:{
        type: DataTypes.STRING
    },
    country:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    parent_type:{
        type: DataTypes.STRING
    },
    utis_code:{
        type: DataTypes.STRING
    },
    city:{
        type: DataTypes.STRING
    },
    region:{
        type: DataTypes.STRING
    },
    current_enterprise:{
        type: DataTypes.STRING
    },
    teaching_language:{
        type: DataTypes.STRING
    },
    grade:{
        type: DataTypes.STRING(2)
    },
    olympiad_module_id:{
        type: DataTypes.TINYINT(3).UNSIGNED
    },
    english_indicator:{
        type: DataTypes.TINYINT(3).UNSIGNED
    },
    exam_result:{
        type: DataTypes.STRING
    },
    project_name:{
        type: DataTypes.STRING
    },
    name_of_scientific_adviser:{
        type: DataTypes.STRING
    },
    surname_of_scientific_adviser:{
        type: DataTypes.STRING
    },
    phone_number_of_scientific_adviser:{
        type: DataTypes.STRING
    },
    name_specialist_scientist:{
        type: DataTypes.STRING
    },
    surname_specialist_scientist:{
        type: DataTypes.STRING
    },
    phone_number_specialist_scientist:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    videoUrl:{
        type: DataTypes.STRING
    },
    docUrl:{
        type: DataTypes.STRING
    },
    enterprise_name:{
        type: DataTypes.STRING
    },
    room_no:{
        type: DataTypes.TINYINT(3).UNSIGNED
    },
    seat_no:{
        type: DataTypes.TINYINT(3).UNSIGNED
    }
});

module.exports = { olympiad_apply };