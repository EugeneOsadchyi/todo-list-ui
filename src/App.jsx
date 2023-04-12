import { RouterProvider } from 'react-router-dom';
import { Provider as SessionProvider } from './hooks/session';
import router from './routes';
import './App.css';

export default function App() {
  return (
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  );
};
