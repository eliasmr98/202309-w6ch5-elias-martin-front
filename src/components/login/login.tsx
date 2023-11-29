import { SyntheticEvent } from 'react';
import { LoginUser } from '../../entities/user';

export function Login() {
  let loginData: LoginUser;

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    loginData = {
      email: formData.get('email')?.toString() as string,
      passwd: formData.get('passwd')?.toString() as string,
    };
    console.log(loginData);
  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="passwd" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
