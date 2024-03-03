import { useState } from 'react';
import axios from '../utils/axios';
import { getFromLs } from '../utils/localStorage';

const useCreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createProduct = async (data) => {
    setLoading(true);
    try {
      return axios.post('/dashboard/product', data, {
        headers: {
          Authorization: `Bearer ${getFromLs('smarphone-manager-token')}`,
        },
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, createProduct };
};

export default useCreateProduct;
