import express from 'express';
import conn from './config/db.js';
import userRouter from './routes/user.route.js';

const app = express();

conn();

app.use('/api/users/', userRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

