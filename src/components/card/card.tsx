import { useFilms } from '../../hooks/use.films';
import { Link } from 'react-router-dom';
import { Film } from '../../models/film';
import './card.scss';
import { serverUrl } from '../../config';

type Props = {
  film: Film;
};

export function Card({ film }: Props) {
  const { handleDetailsPage } = useFilms();
  console.log('Public Id', film.filmFrontImg.publicId);
  console.log('Url', film.filmFrontImg.url);
  console.log('Formato', film.filmFrontImg.format);
  console.log('Size', film.filmFrontImg.size);

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
              src={serverUrl + `/uploads/${film.filmFrontImg.publicId}`}
              alt={`imagen de ${film.name}`}
              onClick={() => handleDetailsPage(film)}
            />
          </Link>
        </div>
      </div>
    </li>
  );
}
