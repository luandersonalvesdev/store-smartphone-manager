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
    <button
      className="border border-red-300 hover:bg-red-500 hover:text-white
    py-1 px-2 rounded duration-300 mr-1 text-red-500 mt-2"
      onClick={ handleDeleteProduct }
    >
      Delete
    </button>
  );
}

DeleteProduct.propTypes = {
  productId: PropTypes.number.isRequired,
};
