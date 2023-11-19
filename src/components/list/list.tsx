import { useEffect } from 'react';
import { Card } from '../card/card';
import './list.scss';
import { useFilms } from '../../hooks/use.films';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export function List() {
  const { films } = useSelector((state: RootState) => state.filmsState);
  const { loadFilms } = useFilms();

  useEffect(() => {
    loadFilms();
  }, [loadFilms]);

  return (
    <div className="list-container">
      <ul className="film-list">
        {films.map((item) => (
          <Card key={item.id} film={item}></Card>
        ))}
      </ul>
    </div>
  );
}
