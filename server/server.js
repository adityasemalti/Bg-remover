import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDb } from './configs/mongoDb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

connectDb();

app.use(express.json());
app.use(cors());

// ✅ Other routes
app.get('/', (req, res) => {
  res.send('API working');
});

app.use('/api/user', userRouter);
app.use('/api/image',imageRouter)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
