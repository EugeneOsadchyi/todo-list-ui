import { Navigate, useNavigate } from 'react-router-dom';

import CardLayout from "../layout/Card";
import LoginForm from "../components/LoginForm";
import useSession, { login } from '../hooks/session';

export default function Login() {
  const navigate = useNavigate();
  const session = useSession();

  if (session) {
    return <Navigate to="/" replace />;
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
