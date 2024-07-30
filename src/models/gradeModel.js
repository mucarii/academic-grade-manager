const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

// Define o modelo Grade
const Grade = sequelize.define('Grade', {
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subject_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  grade_value: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Grade;
