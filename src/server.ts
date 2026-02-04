import { App } from './app';

const PORT = process.env.PORT || 3000;

const appInstance = new App();
const app = appInstance.getApp();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Students API: http://localhost:${PORT}/api/students`);
  console.log(`Courses API: http://localhost:${PORT}/api/courses`);
});
