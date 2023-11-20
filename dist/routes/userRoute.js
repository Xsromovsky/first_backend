"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.post('/register', userController_1.registerUser);
router.post('/login', userController_1.loginUser);
router.get('/protected-route', authMiddleware_1.authenticateToken, (req, res) => {
    res.send('This is a protected user route');
});
exports.default = router;
