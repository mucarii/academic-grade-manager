const Student = require('../models/studentModel');
const logger = require('../services/logger');

exports.createStudent = async (req, res) => {
    try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
} catch (err) {
    logger.error('Erro ao criar aluno:', err);
    res.status(500).json({ message: 'Erro ao criar aluno' });
}
};

exports.getStudents = async (req, res) => {
    try {
    const students = await Student.findAll();
    res.status(200).json(students);
} catch (err) {
    logger.error('Erro ao buscar alunos:', err);
    res.status(500).json({ message: 'Erro ao buscar alunos' });
}
};

exports.getStudentById = async (req, res) => {
try {
    const student = await Student.findByPk(req.params.id);
    if (student) {
        res.status(200).json(student);
    } else {
        res.status(404).json({ message: 'Aluno não encontrado' });
    }
} catch (err) {
    logger.error('Erro ao buscar aluno:', err);
    res.status(500).json({ message: 'Erro ao buscar aluno' });
}
};

exports.updateStudent = async (req, res) => {
try {
    const student = await Student.findByPk(req.params.id);
    if (student) {
        await student.update(req.body);
        res.status(200).json(student);
    } else {
        res.status(404).json({ message: 'Aluno não encontrado' });
    }
} catch (err) {
    logger.error('Erro ao atualizar aluno:', err);
    res.status(500).json({ message: 'Erro ao atualizar aluno' });
}
};

exports.deleteStudent = async (req, res) => {
try {
    const student = await Student.findByPk(req.params.id);
    if (student) {
        await student.destroy();
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Aluno não encontrado' });
    }
} catch (err) {
    logger.error('Erro ao deletar aluno:', err);
    res.status(500).json({ message: 'Erro ao deletar aluno' });
}
};
