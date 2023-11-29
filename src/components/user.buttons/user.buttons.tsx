import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useUsers } from '../../hooks/use.users';
import { useState } from 'react';
import './user.buttons.scss';
import { Login } from '../login/login';
import { Register } from '../register/register';

export function UserButtons() {
  const [modalRegister, setModalRegister] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const { loggedUser } = useSelector((state: RootState) => state.usersState);

  const { logout } = useUsers();

  return (
    <section>
      {!loggedUser && (
        <>
          <button onClick={() => setModalRegister(true)}>Register</button>
          <button onClick={() => setModalLogin(true)}>Login</button>
        </>
      )}
      {loggedUser && (
        <>
          <button onClick={logout}>Logout</button>
          <p>Hola {loggedUser.name}</p>
        </>
      )}

      <dialog open={modalRegister}>
        <Register></Register>
        <button onClick={() => setModalRegister(false)}>Close</button>
      </dialog>

      <dialog open={modalLogin}>
        <Login></Login>
        <button onClick={() => setModalLogin(false)}>Close</button>
      </dialog>
    </section>
  );
}
