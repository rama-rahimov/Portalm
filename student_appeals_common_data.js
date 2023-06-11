const {sequelize} = require('../db');
const {DataTypes} = require('sequelize');

const student_appeals_common_data = sequelize.define('student_appeals_common_data', {
    id:{
        type: DataTypes.INTEGER(11).UNSIGNED ,
        autoIncrement: true ,
        allowNull: false ,
        primaryKey: true
    },
    student_appeal_id:{
        type: DataTypes.INTEGER(11) 
    },
    user_id:{
        type: DataTypes.INTEGER(11) 
    },
    socialStep:{
        type: DataTypes.TINYINT(1)
    },
    socialDecisionReason:{
        type: DataTypes.STRING
    },
    changeName:{
        type: DataTypes.TINYINT(1)
    },
    territorialIntegrityDisability:{
        type: DataTypes.STRING
    },
    birthCertificate:{
        type: DataTypes.STRING
    },
    changeNameDoc:{
        type: DataTypes.STRING
    },
    typeHeroism:{
        type: DataTypes.TINYINT(1)
    },
    territorialIntegrityDeath:{
        type: DataTypes.STRING
    },
    militaryOperationMissing:{
        type: DataTypes.STRING
    },
    militaryOperationDeath:{
        type: DataTypes.STRING
    },
    degreeKinship:{
        type: DataTypes.TINYINT(1)
    },
    marriageCertificate:{
        type: DataTypes.STRING
    },
    birthCertificateOfMartyredChild:{
        type: DataTypes.STRING
    },
    certificateFamilyComposition:{
        type: DataTypes.STRING
    },
    certificateFamilyCompositionOther:{
        type: DataTypes.STRING
    },
    documentConfirmingDisability:{
        type: DataTypes.STRING
    },
    degreeDisability:{
        type: DataTypes.TINYINT(1)
    },
    degreeDisabilityIDoc:{
        type: DataTypes.STRING
    },
    degreeDisabilityIIDoc:{
        type: DataTypes.STRING 
    },
    reasonOrphanhood:{
        type: DataTypes.TINYINT(1)
    },
    deprivationParentalCare:{
        type: DataTypes.STRING 
    },
    documentParentsUnknown:{
        type: DataTypes.STRING 
    },
    deathCertificateParents:{
        type: DataTypes.STRING 
    },
    socialOtherDoc:{
        type: DataTypes.STRING 
    },
    description:{
        type: DataTypes.STRING 
    },
    socialDescription:{
        type: DataTypes.STRING 
    },
    deprivationParentalCareDoc2:{
        type: DataTypes.STRING 
    },
    deprivationParentalCareDoc3:{
        type: DataTypes.STRING 
    },
    deprivationParentalCareDoc4:{
        type: DataTypes.STRING 
    },
    deprivationParentalCareDoc5:{
        type: DataTypes.STRING 
    },
    deprivationParentalCareDoc6:{
        type: DataTypes.STRING 
    },
    deprivationParentalCareDoc7:{
        type: DataTypes.STRING 
    },
    deprivationParentalCareDoc8:{
        type: DataTypes.STRING 
    },
    documentStatusIDP:{
        type: DataTypes.STRING 
    },
    doubleScholarship:{
        type: DataTypes.TINYINT(1)
    },
    studentLoan:{
        type: DataTypes.TINYINT(1)
    },
    studentLoanType:{
        type: DataTypes.TINYINT(1)
    }
},{
    indexes:[{
        name: 'student_appeals_common_data_index',
        using: 'BTREE',
        fields: ['student_appeal_id']
}],
});

module.exports = { student_appeals_common_data };