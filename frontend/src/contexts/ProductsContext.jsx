import { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import axios from '../utils/axios';
import { getFromLs } from '../utils/localStorage';

export const ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/dashboard/product', {
          headers: {
            Authorization: `Bearer ${getFromLs('smartphone-manager-token')}`,
          },
        });
        setAllProducts(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [setAllProducts]);

  const contextValue = useMemo(() => ({
    allProducts,
    setAllProducts,
    loading,
    error,
  }), [allProducts, setAllProducts, loading, error]);

  return (
    <ProductsContext.Provider value={ contextValue }>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
