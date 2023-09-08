import express from 'express';
import conn from './config/db.js';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

const app = express();

conn();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
