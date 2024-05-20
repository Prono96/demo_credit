import express from 'express';
import { createUser, addFunds, transfer } from '../controllers/accountController';

const router = express.Router();

router.post('/users', createUser);
router.post('/fund', addFunds);
router.post('/transfer', transfer);


export default router;
