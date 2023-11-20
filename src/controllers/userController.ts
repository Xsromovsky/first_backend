import bcrypt from 'bcrypt';
import { users, User } from '../models/userModel';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
const JWT_SECRET = process.env.JWT_SECRET as string;

export const registerUser = async (req: Request, res: Response) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser: User = {
            id: Math.random().toString(36).substring(2, 9),
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
            role: 'user'

        };
        users.push(newUser);
        res.status(201).send({ message: 'User created succesfully ' });
    } catch (error) {
        res.status(500).send({ message: 'Error creating user' });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const JWT_SECRET = process.env.JWT_SECRET || 'mysecretkey';


    try {
        const user = users.find(user => user.username === req.body.username);

        if (user && await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });

            res.status(200).send({ token });
        } else {
            res.status(401).send({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error logging in' });
    }
};