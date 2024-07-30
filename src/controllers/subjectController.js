const Subject = require('../models/subjectModel');
const logger = require('../services/logger');

exports.createSubject = async (req, res) => {
    try {
    const subject = await Subject.create(req.body);
    res.status(201).json(subject);
} catch (err) {
    logger.error('Erro ao criar disciplina:', err);
    res.status(500).json({ message: 'Erro ao criar disciplina' });
}
};

exports.getSubjects = async (req, res) => {
    try {
    const subjects = await Subject.findAll();
    res.status(200).json(subjects);
} catch (err) {
    logger.error('Erro ao buscar disciplinas:', err);
    res.status(500).json({ message: 'Erro ao buscar disciplinas' });
}
};

exports.getSubjectById = async (req, res) => {
try {
    const subject = await Subject.findByPk(req.params.id);
    if (subject) {
        res.status(200).json(subject);
    } else {
        res.status(404).json({ message: 'Disciplina não encontrada' });
    }
} catch (err) {
    logger.error('Erro ao buscar disciplina:', err);
    res.status(500).json({ message: 'Erro ao buscar disciplina' });
}
};

exports.updateSubject = async (req, res) => {
try {
    const subject = await Subject.findByPk(req.params.id);
    if (subject) {
        await subject.update(req.body);
        res.status(200).json(subject);
    } else {
        res.status(404).json({ message: 'Disciplina não encontrada' });
    }
} catch (err) {
    logger.error('Erro ao atualizar disciplina:', err);
    res.status(500).json({ message: 'Erro ao atualizar disciplina' });
}
};

exports.deleteSubject = async (req, res) => {
try {
    const subject = await Subject.findByPk(req.params.id);
    if (subject) {
        await subject.destroy();
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Disciplina não encontrada' });
    }
} catch (err) {
    logger.error('Erro ao deletar disciplina:', err);
    res.status(500).json({ message: 'Erro ao deletar disciplina' });
}
};
