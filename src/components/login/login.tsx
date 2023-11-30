import { SyntheticEvent } from 'react';
import { LoginUser } from '../../entities/user';
import { useUsers } from '../../hooks/use.users';
import './login.scss';

type Props = {
  closeModal: () => void;
};

export function Login({ closeModal }: Props) {
  const { login } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const loginUser: LoginUser = {
      email: formData.get('email')?.toString() as string,
      passwd: formData.get('passwd')?.toString() as string,
    };

    login(loginUser);
    closeModal();
  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="passwd" placeholder="password" />
        <div className="login-buttons-container">
          <button type="submit">Login</button>
          <button type="button" onClick={closeModal}>
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
}
