import { Router } from "express";
import filesServices from './services';
const { imagesCreateAndDelete, requestFiles, addSelected } = filesServices;

const router = Router();

router.get('/request', requestFiles)
router.post('/create-delete', imagesCreateAndDelete);
router.post('/add-selected', addSelected);

export { router };

