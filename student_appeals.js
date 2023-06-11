const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const student_appeals = sequelize.define('student_appeals', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        autoIncrement: true ,
        allowNull: false ,
        primaryKey: true
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
    user_id:{
        type: DataTypes.INTEGER(11)
    },
    ReceptionLineId:{
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
    dimNo:{
        type: DataTypes.STRING
    },
    specialtyDimCode:{
        type: DataTypes.INTEGER(11)
    },
    entranceSpecialty:{
        type: DataTypes.STRING
    },
    paymentTypeId:{
        type: DataTypes.INTEGER(11)
    },
    subordinateSpecialization:{
        type: DataTypes.STRING
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
        type: DataTypes.STRING
    },
    previousEduLevelId:{
        type: DataTypes.STRING
    },
    passportScan:{
        type: DataTypes.STRING
    },
    scanningCertificateOfHealth:{
        type: DataTypes.STRING
    },
    previousEducationDocument:{
        type: DataTypes.STRING
    },
    previousEducationLegalizedDocument:{
        type: DataTypes.STRING
    },
    previousEducationTranslatedDocument:{
        type: DataTypes.STRING
    },
    certificateOfLanguageInstruction:{
        type: DataTypes.STRING
    },
    personnelRegistrationCard:{
        type: DataTypes.STRING
    },
    biographyDocScan:{
        type: DataTypes.STRING
    },
    photo3x4:{
        type: DataTypes.STRING
    },
    workCertificateScan:{
        type: DataTypes.STRING
    },
    workExperienceScan:{
        type: DataTypes.STRING
    },
    publishedScientificWorksScan:{
        type: DataTypes.STRING
    },
    publishedScientificWorkListScan:{
        type: DataTypes.STRING
    },
    diplomaOfHigherEducationScan:{
        type: DataTypes.STRING
    },
    identityDocumentScan:{
        type: DataTypes.STRING
    },
    diplomaOfDoctorOfPhilosophyScan:{
        type: DataTypes.STRING
    },
    basicEducation:{
        type: DataTypes.STRING
    },
    pointsOnEntrance:{
        type: DataTypes.STRING
    },
    schoolDiplomaScan:{
        type: DataTypes.STRING
    },
    higherSchoolDiplomaScan:{
        type: DataTypes.STRING
    },
    higherVocationalEducationDiplomaScan:{
        type: DataTypes.STRING
    },
    secondarySpecialEducationDiplomaScan:{
        type: DataTypes.STRING
    },
    highEducationDiplomaScan:{
        type: DataTypes.STRING
    },
    equivalenceOfSpecialtyDocScan:{
        type: DataTypes.STRING
    },
    medicalActivityDocScan:{
        type: DataTypes.STRING
    },
    healthCertificateScan:{
        type: DataTypes.STRING
    },
    militaryRegistrationDocumentScan:{
        type: DataTypes.STRING
    },
    militaryIDDocumentScan:{
        type: DataTypes.STRING
    },
    paymentChekScan:{
        type: DataTypes.STRING
    },
    cartType:{
        type: DataTypes.INTEGER(11)
    },
    cardBinCode:{
        type: DataTypes.STRING
    },
    EntranceYear:{
        type: DataTypes.INTEGER(11)
    },
    militaryService:{
        type: DataTypes.INTEGER(11)
    },
    is_new_payment:{
        type: DataTypes.TINYINT(1)
    },
    reject_description:{
        type: DataTypes.TEXT
    },
    specialtyName:{
        type: DataTypes.STRING
    },
    reject_files:{
        type: DataTypes.TEXT
    },
    custom_password:{
        type: DataTypes.STRING
    },
    tur:{
        type: DataTypes.TINYINT(2).UNSIGNED
    },
    isSend:{
        type: DataTypes.INTEGER(1),
        allowNull: false ,
        defaultValue: 0
    },
    create_date:{
        type: DataTypes.DATE ,
        allowNull: false ,
        defaultValue: DataTypes.NOW
    },
    preparation:{
        type: DataTypes.STRING
    },
    factorStudyAz:{
        type: DataTypes.STRING
    },
    entranceSubSpecialization:{
        type: DataTypes.STRING
    },
    entranceSubSpecialty:{
        type: DataTypes.STRING
    },
    entranceSpecialization:{
        type: DataTypes.STRING
    },
    previousBasicEducation:{
        type: DataTypes.STRING
    },
    teachingYear:{
        type: DataTypes.STRING
    },
    preparation_amount:{
        type: DataTypes.STRING
    },
    update_date:{
        type: DataTypes.DATE
    },
    checkCustomPassword:{
        type: DataTypes.STRING
    },
    customPassword:{
        type: DataTypes.STRING
    },
    previousInstitutionName:{
        type: DataTypes.STRING
    },
    semester:{
        type: DataTypes.TINYINT(2)
    },
    preparation_amunt:{
        type: DataTypes.INTEGER(11)
    },
    payment_method:{
        type: DataTypes.TINYINT(2)
    },
    hasDiscount:{
        type: DataTypes.TINYINT(2)
    },
    isHaveIELTS:{
        type: DataTypes.TINYINT(2)
    },
    examForeignLanguage:{
        type: DataTypes.TINYINT(2)
    },
    isEmployee:{
        type: DataTypes.STRING(2)
    }
},{
    indexes:[{
        name: 'student_appeals_index',
        using: 'BTREE',
        fields: ['create_date', 'fin', 'user_id']
}]
});

module.exports = { student_appeals } ;