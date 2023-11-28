import { FilmsRepo } from './api.repo';
import { Film } from '../models/film';

describe('Given FilmsRepo class', () => {
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getFilms should be used', async () => {
      const repo = new FilmsRepo();
      const expected: Film[] = [];
      const result = await repo.getFilms();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });

  describe('When calling the update method', () => {
    test('Then it should fecth data from the API and return the response', async () => {
      const mockId = '1';
      const privateData = { id: mockId } as unknown as Partial<Film>;
      const expectedUrl = 'http://localhost:3500/films/1';
      const repo = new FilmsRepo();

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(privateData),
      });

      const response = await repo.updateFilm(mockId, privateData);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'PATCH',
        body: JSON.stringify(privateData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      expect(response).toEqual(privateData);
    });

    describe('When we instantiate it and response is bad', () => {
      beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValueOnce({
          ok: false,
          status: 404,
          statusText: 'Not Found',
        });
      });

      test('Then method getFilms should throw an error', async () => {
        const repo = new FilmsRepo();
        expect(repo.getFilms()).rejects.toThrow();
      });
      test('Then method updateFilm should throw an erro', async () => {
        const mockId = '1';
        const filmData = { id: mockId } as unknown as Partial<Film>;
        const repo = new FilmsRepo();
        await expect(repo.updateFilm(mockId, filmData)).rejects.toThrow(
          '404 Not Found'
        );
      });
    });
  });
});
