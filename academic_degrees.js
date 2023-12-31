const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Academic_degrees = sequelize.define('academic_degrees', {
  id:{
    type: DataTypes.INTEGER(11).UNSIGNED ,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user_id:{
    type: DataTypes.INTEGER(11) ,
    allowNull: false
  },
  vacancy_appeals_id:{
    type: DataTypes.INTEGER ,
    allowNull: false
  },
  academic_degree_date:{
    type: DataTypes.STRING
  },
  academic_degree:{
    type: DataTypes.STRING
  }
});

module.exports = {Academic_degrees} ;