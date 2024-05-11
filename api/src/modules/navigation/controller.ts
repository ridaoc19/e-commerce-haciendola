import { Router } from 'express';
import productServices from './services';
const { getMenu, getListProduct, getSearch } = productServices;

const router = Router();

router.get('/menu', getMenu);
router.get('/list-product/flexible/:id/:skip/:take', getListProduct);
router.get('/search/:search', getSearch)

export { router };
