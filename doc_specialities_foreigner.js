const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Doc_specialities_foreigner = sequelize.define('doc_specialities_foreigner', {
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(200)
    },
    ATIS_ID:{
        type: DataTypes.STRING(100)
    },
    enterprise_ATIS_ID:{
        type: DataTypes.STRING(100)
    },
    teachingYear:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false
    },
    specialty_code:{
        type: DataTypes.STRING(100)
    },
    EducationStageId:{
        type: DataTypes.INTEGER(2),
        allowNull: false ,
        defaultValue: 1
    },
    educationLevelId:{
        type: DataTypes.INTEGER(2),
    },
    basicEducation:{
        type: DataTypes.INTEGER(2),
    },
    educationLanguageId:{
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    educationFormId:{
        type: DataTypes.INTEGER(2),
        allowNull: false   
    },
    paymentTypeId:{
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    entranceSpecialtyPaymentAmount:{
        type: DataTypes.STRING,
        defaultValue: ''
    },
    preparation_amunt:{
        type: DataTypes.STRING,
        defaultValue: ''
    }
});

module.exports = { Doc_specialities_foreigner } ;