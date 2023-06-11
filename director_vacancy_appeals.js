const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Director_vacancy_appeals = sequelize.define('director_vacancy_appeals', {
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
    status:{
        type: DataTypes.TINYINT(1),
        allowNull: false ,
        defaultValue: 1
    },
    step:{
        type: DataTypes.TINYINT(1),
        allowNull: false
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
    borncity:{
        type: DataTypes.STRING
    },
    address:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    social_status:{
        type: DataTypes.STRING
    },
    actual_address:{
        type: DataTypes.STRING
    },
    is_address_current:{
        type: DataTypes.TINYINT(1)
    },
    genderId:{
        type: DataTypes.TINYINT(1)
    },
    dq_point:{
        type: DataTypes.STRING
    },
    miq_point:{
        type: DataTypes.STRING
    },
    is_author_book:{
        type: DataTypes.TINYINT(1)
    },
    has_academic_degree:{
        type: DataTypes.TINYINT(1)
    },
    work_exp:{
        type: DataTypes.STRING
    },
    pedagogical_exp:{
        type: DataTypes.STRING
    },
    emp_history_scan:{
        type: DataTypes.STRING
    },
    has_current_work:{
        type: DataTypes.TINYINT(1)
    },
    has_teaching_aids:{
        type: DataTypes.TINYINT(1)
    },
    social_scan:{
        type: DataTypes.STRING
    },
    dq_subject:{
        type: DataTypes.STRING
    },
    miq_subject:{
        type: DataTypes.STRING
    }
});

module.exports = { Director_vacancy_appeals };