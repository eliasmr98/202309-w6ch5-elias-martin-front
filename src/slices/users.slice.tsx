// Visto en clase por alce

type UserState = {
  loggedUser: User | null; // Sería currentUser
  loggingLoadState: 'idle' | 'logging' | 'error';
  token: string;
};

const initialState: UserState = {
  loggedUser: null,
  loggingLoadState: 'idle',
  token: '',
};
