import { useState } from 'react';
import axios from '../utils/axios';
import { getFromLs } from '../utils/localStorage';

const useUpdateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateProduct = async (data, id) => {
    setLoading(true);
    try {
      return axios.put('/dashboard/product', { ...data, id }, {
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

  return { error, loading, updateProduct };
};

export default useUpdateProduct;
