import * as dotenv from 'dotenv';
import 'dotenv/config';
import { z } from 'zod';

dotenv.config({ path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development' });

const envVars = z.object({
  PORT: z.number(),
  DB_HOST: z.string(),
  DB_PORT: z.number(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
  EMAIL_HOST: z.string(),
  EMAIL_PORT: z.number(),
  EMAIL_AUTH_USER: z.string().email(),
  EMAIL_AUTH_PASS: z.string(),
  EMAIL_SEND_FROM: z.string().email(),
  URL_CLIENT: z.string(),
  SECRET_KEY_JWT: z.string(),
  SECRET_KEY_JWT_EMAIL: z.string()
});

const envVarsSchema = Object.entries(process.env).reduce((acc, [key, value]) => {
  const schemaType = (envVars.shape as { [key: string]: any })[key]?._def?.typeName;
  if (schemaType === 'ZodNumber') {
    return { ...acc, [key]: Number(value) }
  } else if (schemaType) {
    return { ...acc, [key]: value }
  }
  return acc
})

envVars.parse(envVarsSchema);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> { }
  }
}