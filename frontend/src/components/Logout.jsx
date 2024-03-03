import { useNavigate } from 'react-router-dom';
import { removeToLs } from '../utils/localStorage';

export default function Logout() {
  const navigate = useNavigate();
  const logout = () => {
    removeToLs('smartphone-manager-token');
    navigate('/login');
  };

  return (
    <button type="button" onClick={ logout }>Logout</button>
  );
}
