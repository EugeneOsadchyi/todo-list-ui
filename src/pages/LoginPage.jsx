import { Navigate, useNavigate, useLocation } from 'react-router-dom';

import CardLayout from "../layout/CardLayout";
import LoginForm from "../components/LoginForm";
import useSession, { login } from '../hooks/session';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const session = useSession();

  if (session) {
    const from = location.state?.from?.pathname || "/";
    return <Navigate to={from} replace />;
  }

  const onSubmit = (formData) => {
    login(formData)
      .then(() => navigate('/'))
      .catch((error) => {
        console.error(error);
        alert(error.error);
      });
  };

  return (
    <CardLayout
      title="Welcome back!"
      subtitle="Log in to continue."
    >
      <LoginForm onSubmit={onSubmit} />
    </CardLayout>
  )
}
