const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const fin_data = sequelize.define('fin_data', {
    fin:{
        type: DataTypes.STRING(20),
        allowNull: false ,
        defaultValue: ''
    },
    first_name:{
        type: DataTypes.STRING(50)
    },
    last_name:{
        type: DataTypes.STRING(50)
    },
    father_name:{
        type: DataTypes.STRING(50)
    },
    birth_date:{
        type: DataTypes.STRING(30)
    },
    gender:{
        type: DataTypes.STRING(10)
    },
    series:{
        type: DataTypes.STRING(50)
    },
    number:{
        type: DataTypes.STRING(50)
    },
    giving_authority:{
        type: DataTypes.STRING
    },
    giving_date:{
        type: DataTypes.STRING(30)
    },
    exp_date:{
        type: DataTypes.STRING(30)
    },
    district:{
        type: DataTypes.STRING
    },
    born_country:{
        type: DataTypes.STRING
    },
    citizenship:{
        type: DataTypes.STRING
    },
    address:{
        type: DataTypes.STRING(500)
    },
    actual_address:{
        type: DataTypes.STRING(500)
    },
    image:{
        type: DataTypes.TEXT('long')
    },
    social_status:{
        type: DataTypes.STRING
    },
    i_start_date:{
        type: DataTypes.DATEONLY
    },
    i_end_date:{
        type: DataTypes.DATEONLY
    },
    not_photo:{
        type: DataTypes.TINYINT(4) ,
        allowNull: false ,
        defaultValue: 0
    },
    militaryStatus:{
        type: DataTypes.TINYINT(4) ,
        allowNull: false ,
        defaultValue: 0
    }
}, {
    indexes:[{
        name: 'fin_data_index',
        using: 'BTREE',
        fields: ['first_name', 
        'last_name', 
        'father_name', 
        'birth_date', 
        'gender', 
        'series', 
        'number', 
        'giving_authority', 
        'giving_date', 
        'exp_date', 
        'district', 
        'born_country' ,
        'citizenship' ,
        'social_status' ,
        'address']
}],
});

module.exports = { fin_data } ;