import { redirect } from 'react-router-dom';
import axios from './axios';
import { getFromLs } from './localStorage';

const notAuthRouteLoader = async () => {
  try {
    await axios.get('/user', {
      headers: {
        Authorization: `Bearer ${getFromLs('smartphone-store-token')}`,
      },
    });
    return redirect('/dashboard', { replace: true });
  } catch (error) {
    return null;
  }
};

export default notAuthRouteLoader;
