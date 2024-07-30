const logger = require('../services/logger');

const errorHandler = (err, req, res, next) => {
    logger.error(err.message);
    res.status(500).json({ message: 'Erro interno do servidor' });
};

module.exports = errorHandler;
