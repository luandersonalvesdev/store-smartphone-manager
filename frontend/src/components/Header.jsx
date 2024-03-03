import useFindUser from '../hooks/useFindUser';
import Logout from './Logout';

export default function Header() {
  const { user } = useFindUser();

  return (
    <header className="flex justify-between items-center bg-green-200 py-3 px-4">
      <p className="opacity-90">
        {'Logged in as '}
        <span className="font-bold">{user.username}</span>
      </p>
      <Logout />
    </header>
  );
}
