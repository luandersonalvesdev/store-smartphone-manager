import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { removeToLs } from '../utils/localStorage';
import { ProductsContext } from '../contexts/ProductsContext';

export default function Logout() {
  const { setAllProducts } = useContext(ProductsContext);

  const navigate = useNavigate();

  const logout = () => {
    setAllProducts([]);
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
