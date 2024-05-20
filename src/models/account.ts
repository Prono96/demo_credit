import db from '../database';

interface Account {
  id: number;
  user_id: number;
  balance: number;
}

export const createAccount = async (account: Omit<Account, 'id'>): Promise<number[]> => {
  return await db('accounts').insert(account);
};

export const getAccountByUserId = async (user_id: number): Promise<Account> => {
  return await db('accounts').where({ user_id }).first();
};

export const updateAccountBalance = async (user_id: number, balance: number): Promise<Account> => {
  return await db('accounts').where({ user_id }).update({ balance });
};
