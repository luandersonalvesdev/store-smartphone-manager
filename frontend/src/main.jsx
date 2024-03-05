import './index.css';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import ProductsContextProvider from './contexts/ProductsContext';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import authRouteLoader from './utils/authRouteLoader';
import notAuthRouteLoader from './utils/notAuthRouteLoader';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/login'),
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: (
      <LoginPage />
    ),
    loader: () => notAuthRouteLoader(),
  },
  {
    path: '/signup',
    element: (
      <SignupPage />
    ),
    loader: () => notAuthRouteLoader(),
  },
  {
    path: '/dashboard',
    element: (
      <DashboardPage />
    ),
    loader: () => authRouteLoader(),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsContextProvider>
    <RouterProvider router={ router } />
  </ProductsContextProvider>,
);
