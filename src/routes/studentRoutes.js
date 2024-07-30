const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Rotas para CRUD de estudantes
router.post('/', studentController.createStudent);
router.get('/', studentController.getStudents);
router.get('/:id', studentController.getStudentById);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
