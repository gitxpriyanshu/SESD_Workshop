import express, { Express } from 'express';
import studentRoutes from './routes/studentRoutes';
import courseRoutes from './routes/courseRoutes';

export class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupMiddleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setupRoutes(): void {
    this.app.use('/api/students', studentRoutes);
    this.app.use('/api/courses', courseRoutes);
    
    this.app.get('/', (req, res) => {
      res.json({ message: 'Student Course Management System API' });
    });
  }

  public getApp(): Express {
    return this.app;
  }
}
