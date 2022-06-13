import express from 'express';
import { addItem, deleteItem, getAllItems } from '../controllers/ItemContoller.js';

const router = express.Router();

router.get('/',getAllItems);

router.post('/add',addItem);

router.post('/delete',deleteItem);


export default router;
