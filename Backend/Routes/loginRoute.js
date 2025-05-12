import express from 'express'
import { admin, loginUser } from '../Controllers/loginController.js';
const router=express.Router()

// router.post('/',loginUser)
router.post('/',admin)


export default router