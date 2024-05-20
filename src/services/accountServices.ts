import { createUser, getUserById } from '../models/user';
import { createAccount, getAccountByUserId, updateAccountBalance } from '../models/account';
import db from '../database';

// Register users
export const registerUser = async (name: string, email: string) => {
  const [userId] = await createUser({ name, email });
  await createAccount({ user_id: userId, balance: 0 });
  return userId;
};

// Fund account by accountId
export const fundAccount = async (user_id: number, amount: number) => {
  const account = await getAccountByUserId(user_id);
  const newBalance = account.balance + amount;
  await updateAccountBalance(user_id, newBalance);
};

export const transferFunds = async (from_user_id: number, to_user_id: number, amount: number) => {
  const fromAccount = await getAccountByUserId(from_user_id);
  const toAccount = await getAccountByUserId(to_user_id);

  if (fromAccount.balance < amount) {
    throw new Error('Insufficient funds');
  }

  await db.transaction(async trx => {
    await updateAccountBalance(from_user_id, fromAccount.balance - amount);
    await updateAccountBalance(to_user_id, toAccount.balance + amount);
  });
};

export const withdrawFunds = async (user_id: number, amount: number) => {
  const account = await getAccountByUserId(user_id);

  if (account.balance < amount) {
    throw new Error('Insufficient funds');
  }

  const newBalance = account.balance - amount;
  await updateAccountBalance(user_id, newBalance);
};
