import { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import axios from '../utils/axios';
import { getFromLs } from '../utils/localStorage';

export const ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/dashboard/product', {
          headers: {
            Authorization: `Bearer ${getFromLs('smartphone-store-token')}`,
          },
        });
        setAllProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [setAllProducts]);

  const contextValue = useMemo(() => ({
    allProducts,
    setAllProducts,
  }), [allProducts, setAllProducts]);

  return (
    <ProductsContext.Provider value={ contextValue }>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
