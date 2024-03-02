import useFindUser from '../hooks/useFindUser';
import Logout from './Logout';

export default function Header() {
  const { user } = useFindUser();

  console.log(user);
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
