import { useState, useEffect } from 'react';
import { getFromLs } from '../utils/localStorage';
import axios from '../utils/axios';

const useFindUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/user', {
          headers: {
            Authorization: `Bearer ${getFromLs('smarphone-manager-token')}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        setStatusCode(0);
      }
    };

    fetchUser();
  }, []);

  return { user };
};

export default useFindUser;
