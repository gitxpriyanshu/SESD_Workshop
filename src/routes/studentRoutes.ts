import { Router } from 'express';
import { StudentController } from '../controllers/StudentController';

const router = Router();
const studentController = new StudentController();

router.post('/', (req, res) => studentController.createStudent(req, res));
router.get('/', (req, res) => studentController.getAllStudents(req, res));
router.get('/:id', (req, res) => studentController.getStudentById(req, res));
router.put('/:id', (req, res) => studentController.updateStudent(req, res));
router.delete('/:id', (req, res) => studentController.deleteStudent(req, res));

export default router;
