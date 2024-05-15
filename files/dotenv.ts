import * as dotenv from 'dotenv';
import * as path from 'path';
import 'dotenv/config';
import { z } from 'zod';

const environment = process.env.NODE_ENV === 'production';

dotenv.config({ path: environment ? '.env.production' : '.env.development' });



const envVars = z.object({
  PORT: z.number(),
  DB_HOST: z.string(),
  DB_PORT: z.number(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
  FILES_FILTER_IMAGES: z.string().url()
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

global.__base = environment? path.resolve(__dirname, '..') : __dirname;

declare global {
  var __base: string;
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> { }
  }
}
