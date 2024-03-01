import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/login'),
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={ router } />,
);
