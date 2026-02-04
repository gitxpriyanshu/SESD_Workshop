import { Request, Response } from 'express';
import { Student } from '../models/Student';

export class StudentController {
  private students: Student[] = [];
  private nextId: number = 1;

  // Create
  public createStudent(req: Request, res: Response): void {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      res.status(400).json({ error: 'Name, email, and age are required' });
      return;
    }

    const student = new Student(this.nextId++, name, email, age);
    this.students.push(student);
    res.status(201).json(student.toJSON());
  }

  // Read All
  public getAllStudents(req: Request, res: Response): void {
    res.json(this.students.map(student => student.toJSON()));
  }

  // Read One
  public getStudentById(req: Request, res: Response): void {
    const id = parseInt(req.params.id);
    const student = this.students.find(s => s.getId() === id);

    if (!student) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }

    res.json(student.toJSON());
  }

  // Update
  public updateStudent(req: Request, res: Response): void {
    const id = parseInt(req.params.id);
    const student = this.students.find(s => s.getId() === id);

    if (!student) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }

    const { name, email, age } = req.body;

    if (name) student.setName(name);
    if (email) student.setEmail(email);
    if (age) student.setAge(age);

    res.json(student.toJSON());
  }

  // Delete
  public deleteStudent(req: Request, res: Response): void {
    const id = parseInt(req.params.id);
    const index = this.students.findIndex(s => s.getId() === id);

    if (index === -1) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }

    this.students.splice(index, 1);
    res.status(204).send();
  }
}
