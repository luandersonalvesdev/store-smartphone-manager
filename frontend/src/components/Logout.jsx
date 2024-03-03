import { useNavigate } from 'react-router-dom';
import { removeToLs } from '../utils/localStorage';

export default function Logout() {
  const navigate = useNavigate();
  const logout = () => {
    removeToLs('smartphone-manager-token');
    navigate('/login');
  };

  return (
    <button
      className="bg-red-500 hover:brightness-105 duration-300 text-white
        font-bold py-1 px-3 rounded"
      type="button"
      onClick={ logout }
    >
      Logout
    </button>
  );
}
