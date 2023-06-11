const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Chf = sequelize.define('chf', {
    fin:{
        type: DataTypes.STRING(50)
      }
},{
    indexes:[{
        name: 'chf_index',
        using: 'BTREE',
        fields: ['fin']
}],
});

module.exports = { Chf } ;