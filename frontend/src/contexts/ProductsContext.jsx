import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);

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
