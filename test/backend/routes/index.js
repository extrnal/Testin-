import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { VerifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/Refresh.js";

const router = express.Router();

router.get('/users', VerifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.delete('/logout', Logout);
router.get('/token', refreshToken);

export default router;