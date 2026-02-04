# Student Course Management System - CRUD Backend

A simple CRUD backend application built with TypeScript, Express, and Object-Oriented Programming principles.

## Features

- **Students CRUD**: Create, Read, Update, Delete operations for students
- **Courses CRUD**: Create, Read, Update, Delete operations for courses
- **OOP Design**: Uses classes and encapsulation for models and controllers
- **TypeScript**: Fully typed codebase

## Installation

```bash
npm install
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Students

- `POST /api/students` - Create a new student
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 20
  }
  ```

- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

### Courses

- `POST /api/courses` - Create a new course
  ```json
  {
    "name": "Mathematics",
    "code": "MATH101",
    "credits": 3
  }
  ```

- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course by ID
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course

## Project Structure

```
src/
  models/          # OOP model classes (Student, Course)
  controllers/     # OOP controller classes
  routes/          # Express routes
  app.ts          # Express app setup
  server.ts       # Server entry point
```
# SESD_Workshop
