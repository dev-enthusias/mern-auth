import express from 'express';
import conn from './config/db.js';

const app = express();

conn();

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
