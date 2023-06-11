const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Ent_sp_join = sequelize.define('ent_sp_join', {
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    year:{
        type: DataTypes.STRING,
        allowNull: false ,
        defaultValue: '2020/2021'
    },
    enterprise_DIM_ID:{
        type: DataTypes.STRING,
    },
    enterprise:{
        type: DataTypes.STRING,
    },
    enterprise_ATIS_ID:{
        type: DataTypes.STRING,
    },
    specialty_code:{
        type: DataTypes.STRING,
    },
    specialty_DIM_ID:{
        type: DataTypes.STRING,
    },
    specialty:{
        type: DataTypes.STRING,
    },
    specialty_ATIS_ID:{
        type: DataTypes.STRING,
    },
    paymentTypeId:{
        type: DataTypes.STRING,
    },
    educationLanguageId:{
        type: DataTypes.STRING,
    },
    educationFormId:{
        type: DataTypes.STRING,
    },
    payment_amount:{
        type: DataTypes.STRING,
    },
    EducationStageId:{
        type: DataTypes.STRING,
    },
    educationLevelId:{
        type: DataTypes.STRING,
    }
});

module.exports = { Ent_sp_join } ;