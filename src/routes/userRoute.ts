import express from 'express'
import { authenticateToken } from '../middleware/authMiddleware'
import { registerUser, loginUser } from '../controllers/userController';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/protected-route', authenticateToken, (req, res) => {
    res.send('This is a protected user route');
});



export default router;