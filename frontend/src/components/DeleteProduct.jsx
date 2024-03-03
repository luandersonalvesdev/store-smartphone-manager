import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import useDeleteProduct from '../hooks/useDeleteProduct';

export default function DeleteProduct({ productId }) {
  const { setAllProducts } = useContext(ProductsContext);
  const { deleteProduct } = useDeleteProduct();

  const handleDeleteProduct = async () => {
    try {
      deleteProduct(productId);
    } catch (err) {
      window.location.reload();
    } finally {
      setAllProducts((prev) => prev.filter((prod) => prod.id !== productId));
    }
  };

  return (
    <button onClick={ handleDeleteProduct }>Delete</button>
  );
}

DeleteProduct.propTypes = {
  productId: PropTypes.number.isRequired,
};
