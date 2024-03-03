import { useState } from 'react';
import axios from '../utils/axios';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginOrSignup = async (endpoint, data) => {
    setLoading(true);
    try {
      return axios.post(`/${endpoint}`, data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, loginOrSignup };
};

export default useLogin;
