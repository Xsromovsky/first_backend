import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

const JWT_SECRET = process.env.JWT_SECRET as string;

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
        if (err) {
            console.log("Token verification error", err);
            return res.sendStatus(403);
        }

        req.user = user;
        next();
    });
};

export const authorizeRole = (role: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user || req.user.role !== role){
            return res.sendStatus(403);
        }
        next();
    };
};