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
        <div className="image-container">
          <Link to={'/details/' + film.id} style={{ textDecoration: 'none' }}>
            <img
              height="300"
              width="200"
              src={film.img}
              alt={`imagen de ${film.name}`}
              onClick={() => handleDetailsPage(film)}
            />
            <p>{film.name}</p>
          </Link>
        </div>
      </div>
    </li>
  );
}
