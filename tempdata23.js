const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const tempdata23 = sequelize.define('tempdata23', {
    name: {
        type: DataTypes.STRING(100)
    },
    ATIS_ID:{
        type: DataTypes.STRING(100)
    }
});

module.exports = { tempdata23 } ;