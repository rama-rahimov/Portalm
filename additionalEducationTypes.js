const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const additionalEducationTypes = sequelize.define('additionalEducationTypes',{
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
      },
      name:{
        type: DataTypes.STRING
      },
      nameEn:{
        type: DataTypes.STRING
      }
});

module.exports = {additionalEducationTypes} ;