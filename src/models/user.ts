import db from '../database';

interface User {
  id: number;
  name: string;
  email: string;
}

export const createUser = async (user: Omit<User, 'id'>): Promise<number[]> => {
  return await db('users').insert(user);
};

export const getUserById = async (id: number): Promise<User> => {
  return await db('users').where({ id }).first();
};
