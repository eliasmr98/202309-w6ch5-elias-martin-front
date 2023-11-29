import { UserButtons } from '../user.buttons/user.buttons';
import './header.scss';

export function Header() {
  return (
    <header>
      <h1>Godzilla Films</h1>
      <UserButtons></UserButtons>
    </header>
  );
}
