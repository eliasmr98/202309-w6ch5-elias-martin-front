import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filmReducer from '../slices/films.slice';

export const store = configureStore({
  reducer: {
    filmsState: filmReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
