import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
export function Details() {
  const { currentFilm } = useSelector((state: RootState) => state.filmsState);
  return (
    <div className="details-container">
      <div className="title-container">
        <p>{currentFilm?.name}</p>
      </div>
      <div className="image-container">
        <img src={currentFilm?.img} alt={currentFilm?.name} />
      </div>
      <div className="info-container">
        <p>Director: {currentFilm?.director}</p>
        <p>Era: {currentFilm?.era}</p>
        <p>Año: {currentFilm?.year}</p>
      </div>
    </div>
  );
}
