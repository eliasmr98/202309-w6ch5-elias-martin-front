import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { ac } from '../slices/users.slice';
import { loginThunk, loginTokenThunk } from '../slices/users.thunk';
import { UsersRepo } from '../services/api.repo.users';
import { LoginUser, User } from '../entities/user';
import { LocalStorage } from '../services/local.storage';

export function useUsers() {
  const { token } = useSelector((state: RootState) => state.usersState);
  console.log(token);

  const dispatch = useDispatch<AppDispatch>();
  const repo = new UsersRepo();
  const userStore = new LocalStorage<{ token: string }>('user');

  const register = (newUser: Partial<User>) => {
    repo.register(newUser);
  };

  const login = (loginUser: LoginUser) => {
    dispatch(loginThunk({ loginUser, repo, userStore }));
  };

  const loginWithToken = (token: string) => {
    dispatch(loginTokenThunk({ token, repo, userStore }));
  };

  const logout = () => {
    dispatch(ac.logout());
    userStore.remove();
  };

  return {
    register,
    login,
    loginWithToken,
    logout,
  };
}
