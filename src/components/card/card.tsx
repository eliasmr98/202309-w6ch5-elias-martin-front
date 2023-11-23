import { useFilms } from '../../hooks/use.films';
import { Link } from 'react-router-dom';
import { Film } from '../../models/film';
import './card.scss';

type Props = {
  film: Film;
};

export function Card({ film }: Props) {
  const { handleDetailsPage } = useFilms();

  return (
    <li className="film-card">
      <div className="card-container">
        <div className="card-name-container">
          <p className="card-name">{film.name}</p>
        </div>
        <div className="card-image-container">
          <Link
            to={'/details/' + film.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              height="300"
              width="200"
              src={film.img}
              alt={`imagen de ${film.name}`}
              onClick={() => handleDetailsPage(film)}
            />
          </Link>
        </div>
      </div>
    </li>
  );
}
