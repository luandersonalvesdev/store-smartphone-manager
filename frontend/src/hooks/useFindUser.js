import { useState, useEffect } from 'react';
import { getFromLs } from '../utils/localStorage';
import axios from '../utils/axios';

const useFindUser = () => {
  const [statusCode, setStatusCode] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/user', {
          headers: {
            Authorization: `Bearer ${getFromLs('smartphone-store-token')}`,
          },
        });
        setStatusCode(response.status);
      } catch (error) {
        setStatusCode(0);
      }
    };

    fetchUser();
  }, []);

  return { statusCode };
};

export default useFindUser;
