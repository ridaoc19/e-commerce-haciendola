import { Router } from "express";
import departmentServices from './services';
const { createAdvertising, updateAdvertising, getAdvertising, deleteAdvertising } = departmentServices;

const router = Router();

router.post('/create', createAdvertising);
router.get('/request', getAdvertising);
router.put('/edit/:advertising_id', updateAdvertising);
router.delete('/delete/:advertising_id', deleteAdvertising);

export { router };

