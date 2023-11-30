import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useUsers } from '../../hooks/use.users';
import { useState } from 'react';
import './user.buttons.scss';
import { Login } from '../login/login';
import { Register } from '../register/register';
import { makeImageURL } from '../../services/images';

export function UserButtons() {
  const [modalRegister, setModalRegister] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const { loggedUser } = useSelector((state: RootState) => state.usersState);
  const userAvatar =
    loggedUser &&
    loggedUser.avatar &&
    makeImageURL(loggedUser?.avatar?.publicId, 50);

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
          <img src={userAvatar!} alt={`imagen de ${loggedUser.name}`} />
        </>
      )}

      {/* Ruta protegida del admin */}
      {loggedUser && loggedUser.role === 'Admin' && <p>Cosas de admin</p>}

      <dialog open={modalRegister}>
        <Register closeModal={() => setModalRegister(false)}></Register>
      </dialog>

      <dialog open={modalLogin}>
        <Login closeModal={() => setModalLogin(false)}></Login>
      </dialog>
    </section>
  );
}
