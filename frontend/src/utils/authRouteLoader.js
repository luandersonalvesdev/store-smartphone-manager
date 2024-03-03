import { redirect } from 'react-router-dom';
import axios from './axios';
import { getFromLs } from './localStorage';

const authRouteLoader = async () => {
  try {
    await axios.get('/user', {
      headers: {
        Authorization: `Bearer ${getFromLs('smartphone-manager-token')}`,
      },
    });
    return null;
  } catch (error) {
    return redirect('/login');
  }
};

export default authRouteLoader;
