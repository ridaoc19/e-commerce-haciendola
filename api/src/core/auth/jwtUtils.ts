import * as jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY_JWT!;

export function generateToken(payload: { user_id: string }): string {
  return jwt.sign(payload, secretKey, { expiresIn: '10h' });
}

export function verifyToken(token: string): any {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return { token: true }
  }
}



const secretKeyEmail = process.env.SECRET_KEY_JWT_EMAIL!;

export function generateTokenEmail(payload: { user_id: string, email: string }): string {
  return jwt.sign(payload, secretKeyEmail, { expiresIn: '10m' });
}

export function verifyTokenEmail(token: string): any {
  try {
    const decoded = jwt.verify(token, secretKeyEmail);
    return decoded;
  } catch (error) {
    return { token: true }
  }
}
