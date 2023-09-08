import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

const signUp = async function (req, res) {
  try {
    const { username, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    await newUser.save();
    res.status(201).json({ message: 'User sucessfully registered' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export default signUp;
