import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import errorHandler from '../utils/error.js';

const signUp = async function (req, res, next) {
  try {
    const { username, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    await newUser.save();
    res.status(201).json({ message: 'User sucessfully registered' });
  } catch (err) {
    next(err);
  }
};

const signIn = async function (req, res, next) {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });  
    if (!validUser) return next(errorHandler(404, 'User not found'));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Wrong credentials'));

    const { password: hashPassword, ...others } = validUser._doc;

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_KEY);
    res
      .cookie('access_token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 3600000),
      })
      .status(201)
      .json(others);
  } catch (error) {
    next(error);
    // res.status(200).json({message: 'Pls work'})
  }
};

export { signUp, signIn };
