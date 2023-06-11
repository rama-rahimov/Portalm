const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Edu_repair_apply = sequelize.define('edu_repair_apply', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id:{
        type: DataTypes.INTEGER(11)
    },
    status:{
        type: DataTypes.TINYINT(2).UNSIGNED ,
        allowNull: false
    },
    step:{
        type: DataTypes.TINYINT(1).UNSIGNED ,
        allowNull: false
    },
    country:{
        type: DataTypes.STRING
    },
    phone:{
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
    actual_address:{
        type: DataTypes.STRING
    },
    citizenship:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    is_address_current:{
        type: DataTypes.STRING
    },
    fin:{
        type: DataTypes.STRING
    },
    edu_institution:{
        type: DataTypes.STRING
    },
    name_of_other_enterprise:{
        type: DataTypes.STRING
    },
    apartment:{
        type: DataTypes.STRING
    },
    specialty:{
        type: DataTypes.STRING
    },
    name_of_other_specialty:{
        type: DataTypes.STRING
    },
    year_of_admission:{
        type: DataTypes.STRING
    },
    date_of_freezing_edu:{
        type: DataTypes.STRING
    },
    teaching_group:{
        type: DataTypes.STRING
    },
    reason_for_freezing_edu:{
        type: DataTypes.STRING
    },
    number_of_order_freezing_edu:{
        type: DataTypes.STRING
    },
    education_level:{
        type: DataTypes.STRING
    },
    education_base:{
        type: DataTypes.STRING
    },
    education_fees:{
        type: DataTypes.STRING
    },
    education_duration:{
        type: DataTypes.STRING
    },
    section:{
        type: DataTypes.INTEGER(11)
    },
    edu_direction:{
        type: DataTypes.STRING
    },
    specialty_code:{
        type: DataTypes.STRING
    },
    genderId:{
        type: DataTypes.TINYINT(1).UNSIGNED.ZEROFILL
    },
    course:{
        type: DataTypes.INTEGER(11)
    },
    borncity:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    name_of_other_apartment:{
        type: DataTypes.STRING
    },
    edu_repair_number:{
        type: DataTypes.STRING
    },
    edu_repair_date:{
        type: DataTypes.STRING
    },
    edu_repair_file:{
        type: DataTypes.STRING
    },
    reasonMessage:{
        type: DataTypes.STRING
    },
    social_status:{
        type: DataTypes.TEXT
    },
    social_scan:{
        type: DataTypes.STRING(150)
    }
});

module.exports = { Edu_repair_apply } ;