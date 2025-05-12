import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import loginModel from '../model/loginModel.js'

export const adminService = async (data) => {
  const { username, name, email, password} = data;

  // Check password match
//   if (password !== confirmPassword) {
//     throw new Error('Passwords do not match');
//   }

  // Check if email already registered
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    userame,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  return { message: "admin created successfully" };
};

export const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid email or password');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid email or password');

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret123', {
    expiresIn: '1h',
  });

  return {
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    }
  };
};