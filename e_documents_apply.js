const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const E_documents_apply = sequelize.define('e_documents_apply', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
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
    fin:{
        type: DataTypes.STRING
    },
    docNo:{
        type: DataTypes.STRING
    },
    country:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    country_code:{
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
    actual_region:{
        type: DataTypes.STRING
    },
    citizenship:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    is_address_current:{
        type: DataTypes.INTEGER(11)
    },
    direction:{
        type: DataTypes.INTEGER(11)
    },
    edu_level:{
        type: DataTypes.INTEGER(11)
    },
    document_purpose:{
        type: DataTypes.INTEGER(11)
    },
    programs_type:{
        type: DataTypes.INTEGER(11)
    },
    reference_provided:{
        type: DataTypes.STRING(50)
    },
    government_agency:{
        type: DataTypes.INTEGER(11)
    },
    program:{
        type: DataTypes.STRING
    },
    edu_institution:{
        type: DataTypes.STRING
    },
    level_of_edu:{
        type: DataTypes.STRING
    },
    specialty:{
        type: DataTypes.STRING
    },
    edu_duration:{
        type: DataTypes.STRING
    },
    entranceYear:{
        type: DataTypes.STRING
    },
    update_date:{
        type: DataTypes.DATE 
    },
    apply_date:{
        type: DataTypes.DATE ,
        defaultValue: DataTypes.NOW
    }

},{timestamps: false});

module.exports = { E_documents_apply } ;