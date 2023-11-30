import { SyntheticEvent, useState } from 'react';
import { useUsers } from '../../hooks/use.users';
import './register.scss';

type Props = {
  closeModal: () => void;
};

export function Register({ closeModal }: Props) {
  const [hasRegister, setHasRegister] = useState(false);
  const { register } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    register(formData);
    setHasRegister(true);
    setTimeout(() => {
      handleCloseOk();
    }, 4000);
  };

  const handleCloseOk = () => {
    setHasRegister(false);
    closeModal();
  };

  return (
    <>
      <h2>Register</h2>

      {!hasRegister && (
        <form onSubmit={handleSubmit} className="register-form">
          <input type="text" name="name" placeholder="Nombre" />
          <input type="text" name="surname" placeholder="Apellidos" />
          <input type="email" name="email" placeholder="eMail" required />
          <input
            type="password"
            name="passwd"
            placeholder="Password"
            required
          />
          <input type="number" name="age" placeholder="Edad" />
          <label htmlFor="avatar">Avatar</label>
          <input type="file" name="avatar" id="avatar" />
          <button type="submit">Registrar</button>
          <button type="button" onClick={handleCloseOk}>
            Cancelar
          </button>
        </form>
      )}
      {hasRegister && (
        <div>
          <p>Registro correcto</p>
          <button type="button" onClick={closeModal}>
            Continuar
          </button>
        </div>
      )}
    </>
  );
}
