const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

// Define o modelo Student
const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Student;
