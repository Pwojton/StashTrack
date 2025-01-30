import jwt from 'jsonwebtoken';

const SECRET_KEY = '';

export interface UserPayload {
  userId: string;
  role: 'user' | 'admin';
}

export const generateToken = (userPayload: UserPayload) => {
  if (!SECRET_KEY) throw new Error('JWT_SECRET is not defined');
  return jwt.sign(userPayload, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.log(error);
    throw new Error('Invalid token');
  }
};
