import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilmsRepo } from '../services/api.repo';
import { Film } from '../models/film';

export const loadFilmsThunk = createAsyncThunk<Film[], FilmsRepo>(
  'films/load',
  async (repo) => {
    const films = await repo.getFilms();
    return films;
  }
);

export const updateFilmThunk = createAsyncThunk<
  Film,
  {
    repo: FilmsRepo;
    id: Film['id'];
    updatedFilm: Partial<Film>;
  }
>('films/update', async ({ repo, id, updatedFilm }) => {
  const finalFilm = await repo.updateFilm(id, updatedFilm);
  return finalFilm;
});
