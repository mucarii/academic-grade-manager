const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

// Rotas para CRUD de notas
router.post('/', gradeController.createGrade);
router.get('/', gradeController.getGrades);
router.get('/:id', gradeController.getGradeById);
router.put('/:id', gradeController.updateGrade);
router.delete('/:id', gradeController.deleteGrade);

module.exports = router;
