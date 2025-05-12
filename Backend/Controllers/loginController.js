import { hashPassword } from "../encryption/encrypt.js"; 
import { adminService, loginService } from '../Services/loginServices.js';

export const admin = async (req, res) => {
  try {
    const result = await adminService(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const result = await loginService(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};