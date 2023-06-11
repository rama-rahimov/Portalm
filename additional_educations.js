const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const Additional_educations = sequelize.define('additional_educations', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fin:{
        type: DataTypes.STRING
    },
    step:{
        type: DataTypes.INTEGER(11)
    },
    status:{
        type: DataTypes.INTEGER(11) ,
        defaultValue: 0
    },
    ReceptionLineId:{
        type: DataTypes.TINYINT(5)
    },
    user_id:{
        type: DataTypes.INTEGER(11)
    },
    EducationStageId:{
        type: DataTypes.INTEGER(11)
    },
    educationLevelId:{
        type: DataTypes.STRING
    },
    institutionAtisId:{
        type: DataTypes.STRING
    },
    entranceSpecialty:{
        type: DataTypes.STRING
    },
    paymentTypeId:{
        type: DataTypes.INTEGER(11)
    },
    educationFormId:{
        type: DataTypes.INTEGER(11)
    },
    educationLanguageId:{
        type: DataTypes.INTEGER(11)
    },
    entranceSpecialtyPaymentAmount:{
        type: DataTypes.STRING
    },
    specialtyPassword:{
        type: DataTypes.STRING
    },
    previousEduStageId:{
      type:DataTypes.STRING
    },
    previousEduLevelId:{
        type:DataTypes.STRING
    },
    passportScan:{
        type:DataTypes.STRING
    },
    scanningCertificateOfHealth:{
        type:DataTypes.STRING
    },
    previousEducationDocument:{
        type:DataTypes.STRING
    },
    previousEducationLegalizedDocument:{
        type:DataTypes.STRING
    },
    previousEducationTranslatedDocument:{
        type:DataTypes.STRING
    },
    certificateOfLanguageInstruction:{
        type:DataTypes.STRING
    },
    secondarySpecialEducationDiplomaScan:{
        type:DataTypes.STRING
    },
    equivalenceOfSpecialtyDocScan:{
        type:DataTypes.STRING
    },
    paymentChekScan:{
        type:DataTypes.STRING
    },
    cartType:{
        type:DataTypes.INTEGER(11)
    },
    cardBinCode:{
        type:DataTypes.STRING
    },
    EntranceYear:{
        type:DataTypes.INTEGER(11)
    },
    specialtyName:{
        type:DataTypes.STRING
    },
    factorStudyAz:{
        type:DataTypes.STRING
    },
    entranceSubSpecialty:{
        type:DataTypes.STRING
    },
    teachingYear:{
        type:DataTypes.STRING
    },
    graduationYear:{
        type:DataTypes.STRING
    },
    documentType:{
        type:DataTypes.STRING(50)
    },
    documentNo:{
        type:DataTypes.STRING(150)
    },
    additionalEducationTypeId:{
        type:DataTypes.TINYINT(5)
    },
    previousSpecialtyName:{
        type:DataTypes.STRING(500)
    },
    reject_description:{
        type:DataTypes.STRING(500)
    },
    reject_files:{
        type:DataTypes.STRING(500)
    },
    previousInstitutionName:{
        type:DataTypes.STRING
    },
    previousInstitution:{
        type:DataTypes.STRING(150)
    },
    previousSpecialty:{
        type:DataTypes.STRING(150)
    },
    previousSpecialtyCode:{
        type:DataTypes.STRING
    },
    admissionYear:{
        type:DataTypes.STRING(150)
    },
    previousBasicEducation:{
        type:DataTypes.STRING
    },
    basicEducation:{
        type:DataTypes.STRING
    },
    isSend:{
        type:DataTypes.TINYINT(1) ,
        allowNull: false ,
        defaultValue: 0
    } 
},{
    indexes:[{
        name: 'additional_educations_index',
        using: 'BTREE',
        fields: ['fin', 'user_id']
}]
}); 

module.exports = {Additional_educations} ;