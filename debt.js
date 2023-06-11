const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Debt = sequelize.define('debt', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id:{
       type:DataTypes.INTEGER(11).UNSIGNED ,
       allowNull: false ,
    },
    status:{
        type:DataTypes.TINYINT(2).UNSIGNED ,
        allowNull: false 
    },
    step:{
        type:DataTypes.TINYINT(1) ,
        allowNull: false 
    },
    fin:{
        type:DataTypes.STRING(30),
        allowNull: false ,
        defaultValue: ''
    },
    citizenship:{
        type:DataTypes.STRING(5),
    },
    first_name:{
        type:DataTypes.STRING
    },
    last_name:{
        type:DataTypes.STRING
    },
    father_name:{
        type:DataTypes.STRING
    },
    birth_date:{
        type:DataTypes.STRING
    },
    address:{
        type:DataTypes.STRING
    },
    is_address_current:{
        type:DataTypes.STRING  
    },
    actual_address:{
        type:DataTypes.STRING
    },
    country:{
        type:DataTypes.STRING
    },
    phone:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    confirm_email:{
        type:DataTypes.STRING
    },
    level_of_education:{
        type:DataTypes.STRING
    },
    education_level:{
        type:DataTypes.STRING
    },
    education_institution:{
        type:DataTypes.STRING
    },
    education_base:{
        type:DataTypes.STRING
    },
    admission_year:{
        type:DataTypes.STRING
    },
    specialty:{
        type:DataTypes.STRING
    },
    specialty_password:{
        type:DataTypes.STRING
    },
    sub_specialty:{
        type:DataTypes.STRING
    },
    specialization:{
        type:DataTypes.STRING
    },
    sub_specialization:{
        type:DataTypes.STRING
    },
    education_type:{
        type:DataTypes.STRING
    },
    education_language:{
        type:DataTypes.STRING
    },
    invoice:{
        type:DataTypes.STRING
    },
    subjectName:{
        type:DataTypes.STRING
    },
    directed_enterprise:{
        type:DataTypes.STRING
    },
    remainDebt:{
        type:DataTypes.STRING
    },
    invoiceCreateDate:{
        type:DataTypes.STRING
    },
    invoiceEndDate:{
        type:DataTypes.STRING
    },
    RecoveryType:{
        type:DataTypes.STRING
    },
    isSend:{
        type:DataTypes.TINYINT(1) ,
        allowNull: false ,
        defaultValue: 0
    },
    reject_description:{
        type:DataTypes.TEXT
    },
    reject_files:{
        type:DataTypes.TEXT
    }
});

module.exports = { Debt } ;