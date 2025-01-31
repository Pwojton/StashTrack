import express, { Request, Response } from 'express';
import authRouter from './routes/authRouter';

const app = express();
const PORT = process.env.PORT || 3000;

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

app.use(authRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
