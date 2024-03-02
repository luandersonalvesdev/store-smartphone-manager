import useFindUser from '../hooks/useFindUser';
import Logout from './Logout';

export default function Header() {
  const { user } = useFindUser();

  return (
    <header>
      <p>
        {'You are logged in as '}
        {user.username}
      </p>
      <Logout />
    </header>
  );
}
