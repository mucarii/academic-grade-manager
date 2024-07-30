const { Sequelize } = require('sequelize');

// Cria uma instância do Sequelize para conectar ao SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite', // Nome do arquivo do banco de dados SQLite
});

module.exports = sequelize;
