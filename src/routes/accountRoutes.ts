import express from 'express';
import { createUser, addFunds, transfer, withdraw } from '../controllers/accountController';

const router = express.Router();

router.post('/users', createUser);
router.post('/fund', addFunds);
router.post('/transfer', transfer);
router.post('/withdraw', withdraw);


export default router;
