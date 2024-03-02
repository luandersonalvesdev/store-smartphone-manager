import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import ProductsContextProvider from './contexts/ProductsContext';
import RedirectDashboardRoute from './routes/redirect/RedirectDashboardRoute';
import SignupPage from './pages/SignupPage';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/login'),
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: (
      <RedirectDashboardRoute>
        <LoginPage />
      </RedirectDashboardRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <RedirectDashboardRoute>
        <SignupPage />
      </RedirectDashboardRoute>
    ),
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsContextProvider>
    <RouterProvider router={ router } />
  </ProductsContextProvider>,
);
