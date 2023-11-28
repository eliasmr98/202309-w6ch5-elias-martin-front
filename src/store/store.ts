import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filmReducer from '../slices/films.slice';
import usersReducer from '../slices/users.slice';

export const appStore = configureStore({
  reducer: {
    filmsState: filmReducer,
    usersState: usersReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;

export type RootState = ReturnType<typeof appStore.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
