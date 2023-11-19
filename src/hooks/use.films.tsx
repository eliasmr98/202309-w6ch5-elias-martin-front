import { useCallback, useMemo } from 'react';
import { FilmsRepo } from '../services/api.repo';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { Film } from '../models/film';
import { loadFilmsThunk, updateFilmThunk } from '../slices/films.thunks';

export function useFilms() {
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new FilmsRepo(), []);

  const loadFilms = useCallback(async () => {
    try {
      dispatch(loadFilmsThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  const updateFilm = async (id: Film['id'], film: Partial<Film>) => {
    try {
      dispatch(updateFilmThunk({ id, repo, updatedFilm: film }));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    loadFilms,
    updateFilm,
  };
}
