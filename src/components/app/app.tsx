import { useEffect } from 'react';
import { AppRoutes } from '../app.routes/app.routes';
import { Header } from '../header/header';
import { useUsers } from '../../hooks/use.users';

export function App() {
  const { loginWithToken } = useUsers();

  useEffect(() => {
    loginWithToken();
  }, []);

  return (
    <>
      <Header></Header>
      <AppRoutes></AppRoutes>
    </>
  );
}
