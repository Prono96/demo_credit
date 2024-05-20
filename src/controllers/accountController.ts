import { Request, Response } from 'express';
import { registerUser, fundAccount } from '../services/accountServices';

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const userId = await registerUser(name, email);
  res.status(201).json({ userId });
};

export const addFunds = async (req: Request, res: Response) => {
  const { user_id, amount } = req.body;
  await fundAccount(user_id, amount);
  console.log(user_id, amount)
  res.status(200).json({ message: 'Funds added', amount, user_id });
};
