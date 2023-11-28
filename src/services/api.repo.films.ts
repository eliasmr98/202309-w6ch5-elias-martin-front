import { serverUrl } from '../config';
import { Film } from '../entities/film';

export class FilmsRepo {
  apiUrl = serverUrl + '/films';

  async getFilms(): Promise<Film[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateFilm(id: Film['id'], updatedFilm: Partial<Film>): Promise<Film> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedFilm),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
