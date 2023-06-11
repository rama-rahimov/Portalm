const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const support_apply = sequelize.define('support_apply', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        allowNull: false ,
        autoIncrement: true ,
        primaryKey: true
    },
    status:{
        type: DataTypes.INTEGER(2) 
    },
    user_id:{
        type: DataTypes.INTEGER(11)
    },
    fin:{
        type: DataTypes.STRING
    },
    child_id:{
        type: DataTypes.INTEGER(11)
    },
    tms_id:{
        type: DataTypes.INTEGER(11)
    },
    dublicateId:{
        type: DataTypes.INTEGER(11)
    },
    step:{
        type: DataTypes.INTEGER(1)
    },
    theme:{
        type: DataTypes.STRING
    },
    description_application:{
        type: DataTypes.TEXT
    },
    result:{
        type: DataTypes.TEXT
    },
    area_id:{
        type: DataTypes.INTEGER(11)
    },
    apply_type:{
        type: DataTypes.TINYINT(1)
    },
    education_type:{
        type: DataTypes.TINYINT(3)
    },
    contingent:{
        type: DataTypes.INTEGER(11)
    },
    child_citizenship:{
        type: DataTypes.STRING
    },
    child_fin:{
        type: DataTypes.STRING
    },
    child_utis_code:{
        type: DataTypes.INTEGER(11)
    },
    child_first_name:{
        type: DataTypes.STRING
    },
    child_last_name:{
        type: DataTypes.STRING
    },
    child_father_name:{
        type: DataTypes.STRING
    },
    child_birth_date:{
        type: DataTypes.STRING
    },
    child_address:{
        type: DataTypes.STRING
    },
    child_is_address_current:{
        type: DataTypes.TINYINT(1)
    },
    child_actual_address:{
        type: DataTypes.STRING
    },
    child_city:{
        type: DataTypes.STRING
    },
    child_region:{
        type: DataTypes.STRING
    },
    child_current_enterprise:{
        type: DataTypes.STRING
    },
    child_teaching_language:{
        type: DataTypes.STRING
    },
    child_grade:{
        type: DataTypes.STRING
    },
    child_parent_type:{
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
    consent:{
        type: DataTypes.INTEGER(11)
    },
    general_information:{
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
    phone:{
        type: DataTypes.STRING
    },
    country_code:{
        type: DataTypes.STRING(10)
    },
    born_country:{
        type: DataTypes.STRING
    },
    rate_value:{
        type: DataTypes.STRING(10)
    },
    edu_doc_id:{
        type: DataTypes.INTEGER(11)
    },
    rate_comment:{
        type: DataTypes.STRING
    },
    createInCallCenter:{
        type: DataTypes.TINYINT(1) ,
        allowNull: false ,
        defaultValue: 0
    },
    create_date:{
        type: DataTypes.DATE ,
        defaultValue: DataTypes.NOW
    }
});

module.exports = { support_apply } ;