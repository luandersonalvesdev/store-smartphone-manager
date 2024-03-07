import { useState } from 'react';
import axios from '../utils/axios';
import { getFromLs } from '../utils/localStorage';

const useDeleteProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteProduct = async (productId) => {
    setLoading(true);
    try {
      axios.delete(`/dashboard/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${getFromLs('smartphone-manager-token')}`,
        },
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, deleteProduct };
};

export default useDeleteProduct;
