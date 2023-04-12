import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import RegistrationPage from '../pages/RegistrationPage';
import TodoListPage from '../pages/TodoListPage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      { index: true, element: <TodoListPage /> },
      { path: '/logout', element: <LogoutPage /> }
    ],
    errorElement: <ErrorPage />,
  },
  { path: 'login', element: <LoginPage /> },
  { path: 'register', element: <RegistrationPage /> },
]);

export default router;
