const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Appealed_courses = sequelize.define('appealed_courses', {
    id:{
        type: DataTypes.INTEGER(11) ,
        primaryKey: true ,
        autoIncrement: true ,
        allowNull: false
    },
    user_id:{
     type: DataTypes.INTEGER(11)
    },
    course_id:{
        type: DataTypes.INTEGER(11)
    },
    course_appeals_id:{
        type: DataTypes.INTEGER(11)
    },
    status:{
        type: DataTypes.TINYINT(3).UNSIGNED ,
        allowNull: false
    },
    enterprises_id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false
    },
    corpus_id:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING
    },
    teaching_year:{
        type: DataTypes.INTEGER(11) ,
        allowNull: false
    },
    start_date:{
        type: DataTypes.DATE
    },
    end_date:{
        type: DataTypes.DATE
    },
    amount:{
        type: DataTypes.INTEGER(11)
    },
    oc_direction:{
        type: DataTypes.TINYINT(4)
    },
    specialty_code:{
        type: DataTypes.INTEGER(11)
    },
    specialty:{
        type: DataTypes.INTEGER(11)
    },
    max_student_capacity:{
        type: DataTypes.TINYINT(4)
    },
    special_student_capacity:{
        type: DataTypes.TINYINT(4)
    },
    education_duration:{
        type: DataTypes.TINYINT(4)
    },
    last_date:{
        type: DataTypes.STRING ,
        defaultValue: ''
    },
    lesson_hour:{
        type: DataTypes.STRING
    },
    reason:{
        type: DataTypes.STRING
    },
    holy:{
        type: DataTypes.STRING
    },
    enterprises_name:{
        type: DataTypes.STRING
    },
    corpus_name:{
        type: DataTypes.STRING
    },
    specialty_name:{
        type: DataTypes.STRING
    },
    teaching_language:{
        type: DataTypes.STRING
    },
    teaching_year_name:{
        type: DataTypes.STRING
    },
    oc_direction_name:{
        type: DataTypes.STRING
    },
    specialty_code_name:{
        type: DataTypes.STRING
    },
    financing:{
        type: DataTypes.TINYINT(1)
    }
});

module.exports = { Appealed_courses } ;