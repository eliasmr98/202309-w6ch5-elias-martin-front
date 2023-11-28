import { screen, render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useEffect } from 'react';
import { FilmsRepo } from '../services/api.repo.films.ts';
import { useFilms } from './use.films';
import { Film } from '../entities/film.ts';
import { userEvent } from '@testing-library/user-event';
import { appStore } from '../store/store';
import { Provider } from 'react-redux';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useReducer: jest.fn().mockReturnValue([{}, jest.fn()]),
}));

describe('Given the useFilms hook', () => {
  FilmsRepo.prototype.getFilms = jest
    .fn()
    .mockResolvedValue([{ id: '34' } as unknown as Film]);

  describe('When we run the hook inside a component', () => {
    beforeEach(async () => {
      const TestComponent = () => {
        const { loadFilms, updateFilm } = useFilms();

        useEffect(() => {
          loadFilms();
        }, [loadFilms]);

        return (
          <>
            <h1>Test Component</h1>
            <button onClick={() => updateFilm('1', { name: 'godzilla' })}>
              Update
            </button>
          </>
        );
      };

      await act(async () => {
        render(
          <Provider store={appStore}>
            <TestComponent></TestComponent>
          </Provider>
        );
      });
    });

    test('Then it should be in the document', async () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });

    test('Test of loading characters public api', async () => {
      const loadbutton = screen.getByText('Update');
      await userEvent.click(loadbutton);
      expect(FilmsRepo.prototype.getFilms).toHaveBeenCalled();
    });
  });
});
