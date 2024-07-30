const express = require('express');
const gradeRoutes = require('./routes/gradeRoutes');
const studentRoutes = require('./routes/studentRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./services/logger');
const sequelize = require('./config/dbConfig');
const Grade = require('./models/gradeModel');
const Student = require('./models/studentModel');
const Subject = require('./models/subjectModel');

const app = express();

// Middleware
app.use(express.json());
app.use('/grades', gradeRoutes);
app.use('/students', studentRoutes);
app.use('/subjects', subjectRoutes);
app.use(errorHandler);

// Sincronizar os modelos com o banco de dados
sequelize.sync()
  .then(() => logger.info('Banco de dados sincronizado'))
  .catch(err => logger.error('Erro ao sincronizar o banco de dados:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => logger.info(`Servidor rodando na porta ${PORT}`));
