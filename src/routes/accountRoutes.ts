import express from 'express';
import { createUser, addFunds } from '../controllers/accountController';

const router = express.Router();

router.post('/users', createUser);
router.post('/fund', addFunds);


export default router;
