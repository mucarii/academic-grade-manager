const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

// Define o modelo Subject
const Subject = sequelize.define('Subject', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Subject;
