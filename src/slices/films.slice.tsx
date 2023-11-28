import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Film } from '../entities/film';
import { loadFilmsThunk, updateFilmThunk } from './films.thunks';

type FilmsState = {
  films: Film[];
  stateOption: 'idle' | 'loading' | 'error'; // Esto debería llamarse filmLoadState
  currentFilm: Film | null;
};

const initialState: FilmsState = {
  films: [],
  stateOption: 'idle',
  currentFilm: null,
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setCurrentFilm: (
      state: FilmsState,
      { payload }: PayloadAction<Film | null>
    ) => {
      state.currentFilm = payload;
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadFilmsThunk.pending, (state: FilmsState) => {
      state.stateOption = 'loading';
      return state;
    });
    builder.addCase(
      loadFilmsThunk.fulfilled,
      (state: FilmsState, { payload }: PayloadAction<Film[]>) => {
        state.films = payload;
        state.stateOption = 'idle';
        return state;
      }
    );
    builder.addCase(loadFilmsThunk.rejected, (state: FilmsState) => {
      state.stateOption = 'error';
      return state;
    });
    builder.addCase(
      updateFilmThunk.fulfilled,
      (state: FilmsState, { payload }: PayloadAction<Film>) => {
        state.films[state.films.findIndex((item) => item.id === payload.id)] =
          payload;
        return state;
      }
    );
  },
});

export default filmsSlice.reducer;
export const { setCurrentFilm } = filmsSlice.actions;
