import jwt, { JwtPayload } from 'jsonwebtoken';
import { db } from './data/db.js';
const authToken = 'miTokenSecreto';


export const validatePlainUser = (user: string, password: string) => {
    if (user === db.plainUser.username && password === db.plainUser.password) {
        return true;
    }
    return false;
}
export const authorize = (token: string) => {
    return token === `Bearer ${authToken}`
};

export interface JwtRequest extends Request {
    token: string | JwtPayload;
}

export const authenticateJwt = (token: string) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY ?? '');
        console.log(decoded)
        return true;
    } catch (err) {
        return false;
    }
};

export const validateUser = (user: string, password: string) => {
    if (user === db.User.username && password === db.User.password) {
        return { isAuthenticated: true, username: db.User.username, email: db.User.email, role: db.User.role };
    }
    return { isAuthenticated: false };
}

export const validateUserWithToken = (user: string, password: string) => {

    let secret: string = process.env.JWT_SECRET_KEY ?? '';
    console.log('secret:', secret);
    if (user === db.User.username && password === db.User.password) {
        let token = jwt.sign(
            {
                username: db.User.username,
                email: db.User.email,
                role: db.User.role
            },
            secret,
            {
                expiresIn: "1d",
            });
        console.log('token:', token);
        return { isAuthenticated: true, token };
    }
    return { isAuthenticated: false };
}