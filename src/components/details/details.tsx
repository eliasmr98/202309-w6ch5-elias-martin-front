import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './details.scss';
export function Details() {
  const { currentFilm } = useSelector((state: RootState) => state.filmsState);
  return (
    <div className="details-container">
      <div className="details-image-container">
        <img
          src={currentFilm?.img}
          alt={currentFilm?.name}
          height="500"
          width="380"
        />
      </div>
      <div className="details-info-container">
        <div className="details-name-container">
          <p>{currentFilm?.name}</p>
        </div>
        <p>
          <span className="details-bold-text">Director:</span>{' '}
          {currentFilm?.director}
        </p>
        <p>
          <span className="details-bold-text">Era:</span> {currentFilm?.era}
        </p>
        <p>
          <span className="details-bold-text">Año:</span> {currentFilm?.year}
        </p>
      </div>
    </div>
  );
}
