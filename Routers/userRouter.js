import express from 'express'
import { loginuser, registerUser } from "../Controllers/userController";


const router = express .Router();


router .post ('/register-user');
router.post ('/login-user',loginuser)

export default router;
