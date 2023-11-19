// import { useFilms } from '../../hooks/use.films';
import { Film } from '../../models/film';
import './card.scss';

type Props = {
  film: Film;
};

export function Card({ film }: Props) {
  // const { updateFilm } = useFilms();

  return (
    <li className="film-card">
      <div className="card-container">
        <div className="image-container">
          <img
            height="300"
            width="200"
            src={film.img}
            alt={`imagen de ${film.name}`}
          />
        </div>
        <div className="button-card-container">
          <p>{film.name}</p>
        </div>
      </div>
    </li>
  );
}
