import PropTypes from 'prop-types';
import { useContext } from 'react';
import axios from '../utils/axios';
import { getFromLs } from '../utils/localStorage';
import { ProductsContext } from '../contexts/ProductsContext';

export default function DeleteProduct({ productId }) {
  const { setAllProducts } = useContext(ProductsContext);

  const deleteProduct = async () => {
    await axios.delete(`/dashboard/product/${productId}`, {
      headers: {
        Authorization: `Bearer ${getFromLs('smartphone-store-token')}`,
      },
    });

    setAllProducts((prev) => prev.filter((prod) => prod.id !== productId));
  };

  return (
    <button onClick={ deleteProduct }>Delete</button>
  );
}

DeleteProduct.propTypes = {
  productId: PropTypes.number.isRequired,
};
