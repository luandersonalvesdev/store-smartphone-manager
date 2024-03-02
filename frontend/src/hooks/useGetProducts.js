import { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { getFromLs } from '../utils/localStorage';
import axios from '../utils/axios';

const useGetProducts = () => {
  const { setAllProducts } = useContext(ProductsContext);
  const [statusCode, setStatusCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/dashboard/product', {
          headers: {
            Authorization: `Bearer ${getFromLs('smarphone-manager-token')}`,
          },
        });
        setAllProducts(response.data);
        setStatusCode(response.status);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setAllProducts]);

  return { statusCode, loading, error };
};

export default useGetProducts;
