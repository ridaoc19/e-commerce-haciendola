import { Router } from 'express';
import productServices from './services';
const { getMenu } = productServices;

const router = Router();

router.get('/menu', getMenu);



export { router };

