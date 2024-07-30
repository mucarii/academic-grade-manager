const Grade = require('../models/gradeModel');
const logger = require('../services/logger');

exports.createGrade = async (req, res) => {
    try {
    const grade = await Grade.create(req.body);
    res.status(201).json(grade);
} catch (err) {
    logger.error('Erro ao criar nota:', err);
    res.status(500).json({ message: 'Erro ao criar nota' });
}
};

exports.getGrades = async (req, res) => {
    try {
    const grades = await Grade.findAll();
    res.status(200).json(grades);
} catch (err) {
    logger.error('Erro ao buscar notas:', err);
    res.status(500).json({ message: 'Erro ao buscar notas' });
}
};

exports.getGradeById = async (req, res) => {
    try {
    const grade = await Grade.findByPk(req.params.id);
    if (grade) {
        res.status(200).json(grade);
    } else {
        res.status(404).json({ message: 'Nota não encontrada' });
    }
} catch (err) {
    logger.error('Erro ao buscar nota:', err);
    res.status(500).json({ message: 'Erro ao buscar nota' });
}
};

exports.updateGrade = async (req, res) => {
    try {
    const grade = await Grade.findByPk(req.params.id);
    if (grade) {
        await grade.update(req.body);
        res.status(200).json(grade);
    } else {
        res.status(404).json({ message: 'Nota não encontrada' });
    }
} catch (err) {
    logger.error('Erro ao atualizar nota:', err);
    res.status(500).json({ message: 'Erro ao atualizar nota' });
}
};

exports.deleteGrade = async (req, res) => {
    try {
    const grade = await Grade.findByPk(req.params.id);
    if (grade) {
        await grade.destroy();
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Nota não encontrada' });
    }
} catch (err) {
    logger.error('Erro ao deletar nota:', err);
    res.status(500).json({ message: 'Erro ao deletar nota' });
}
};
