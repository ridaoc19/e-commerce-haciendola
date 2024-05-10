import { Router } from 'express';
import subcategoryServices from './services';
const { createCategory, updateCategory, deleteCategory, getCategory } = subcategoryServices;

const router = Router();

router.post('/create/:category_id', createCategory);
router.put('/edit/:subcategory_id', updateCategory);
router.delete('/delete/:subcategory_id', deleteCategory);
router.get('/request/:subcategory_id', getCategory);

export { router };
