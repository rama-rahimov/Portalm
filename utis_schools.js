const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const utis_schools = sequelize.define('utis_schools', {
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        autoIncrement: true ,
        primaryKey: true ,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING
    },
    longitude:{
        type: DataTypes.DECIMAL(30,6)
    },
    paralel:{
        type: DataTypes.DECIMAL(30,6)
    },
    regionId:{
        type: DataTypes.INTEGER(11)
    },
    regionName:{
        type: DataTypes.STRING
    },
    schoolCode:{
        type: DataTypes.INTEGER(11)
    },
    schoolKind:{
        type: DataTypes.STRING
    },
    schoolKindId:{
        type: DataTypes.INTEGER(11)
    },
    name:{
        type: DataTypes.STRING
    },
    schoolType:{
        type: DataTypes.STRING
    },
    schoolTypeId:{
        type: DataTypes.INTEGER(11)
    },
    subjection:{
        type: DataTypes.STRING
    },
    subjectionId:{
        type: DataTypes.INTEGER(11)    
    }
});

module.exports = { utis_schools } ;