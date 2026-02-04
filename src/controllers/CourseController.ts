import { Request, Response } from 'express';
import { Course } from '../models/Course';

export class CourseController {
  private courses: Course[] = [];
  private nextId: number = 1;

  // Create
  public createCourse(req: Request, res: Response): void {
    const { name, code, credits } = req.body;

    if (!name || !code || !credits) {
      res.status(400).json({ error: 'Name, code, and credits are required' });
      return;
    }

    const course = new Course(this.nextId++, name, code, credits);
    this.courses.push(course);
    res.status(201).json(course.toJSON());
  }

  // Read All
  public getAllCourses(req: Request, res: Response): void {
    res.json(this.courses.map(course => course.toJSON()));
  }

  // Read One
  public getCourseById(req: Request, res: Response): void {
    const id = parseInt(req.params.id);
    const course = this.courses.find(c => c.getId() === id);

    if (!course) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }

    res.json(course.toJSON());
  }

  // Update
  public updateCourse(req: Request, res: Response): void {
    const id = parseInt(req.params.id);
    const course = this.courses.find(c => c.getId() === id);

    if (!course) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }

    const { name, code, credits } = req.body;

    if (name) course.setName(name);
    if (code) course.setCode(code);
    if (credits) course.setCredits(credits);

    res.json(course.toJSON());
  }

  // Delete
  public deleteCourse(req: Request, res: Response): void {
    const id = parseInt(req.params.id);
    const index = this.courses.findIndex(c => c.getId() === id);

    if (index === -1) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }

    this.courses.splice(index, 1);
    res.status(204).send();
  }
}
