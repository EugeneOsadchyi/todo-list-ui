import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './routes/components/ProtectedRoute';


import './App.css';

import {
  Login,
  Logout,
  Register,
  Todos,
  ErrorPage,
} from './routes';


import { Provider as SessionProvider } from './hooks/session';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Todos />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'logout',
    element: <Logout />,
  }
]);

export default function App() {
  return (
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  );
};
