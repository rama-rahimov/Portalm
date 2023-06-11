const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Atis_specialty = sequelize.define('atis_specialty', {
    id:{
        type: DataTypes.INTEGER(10).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name:{
        type: DataTypes.STRING
      },
      nameEn:{
        type: DataTypes.STRING
      },
      ATIS_ID:{
        type: DataTypes.STRING(100)
      },
      password:{
        type: DataTypes.STRING(100)
      }
});

module.exports = { Atis_specialty } ;