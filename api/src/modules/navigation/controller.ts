import { Router } from 'express';
import productServices from './services';
const { getMenu, getListProduct } = productServices;

const router = Router();

router.get('/menu', getMenu);
router.get('/list-product/flexible/:id/:skip/:take', getListProduct);



export { router };
