import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useGetProducts from '../../hooks/useGetProducts';

const SUCCESS_STATUS_CODE = 200;

export default function RedirectDashboardRoute({ children }) {
  const { statusCode } = useGetProducts();

  return statusCode === SUCCESS_STATUS_CODE ? <Navigate to="/dashboard" /> : children;
}

RedirectDashboardRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
