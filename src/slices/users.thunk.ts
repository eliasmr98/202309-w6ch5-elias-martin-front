import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse } from '../types/login.response';
import { LoginUser } from '../entities/user';
import { UsersRepo } from '../services/api.repo.users';

// Thunk del login
export const loginThunk = createAsyncThunk<
  LoginResponse,
  {
    loginUser: LoginUser;
    repo: UsersRepo;
  }
>('login', async ({ loginUser, repo }) => {
  return await repo.login(loginUser);
});

// Thunk del login with token
export const loginTokenThunk = createAsyncThunk<
  LoginResponse,
  {
    token: string;
    repo: UsersRepo;
  }
>('loginWithToken', async ({ token, repo }) => {
  return await repo.loginWithToken(token);
});
