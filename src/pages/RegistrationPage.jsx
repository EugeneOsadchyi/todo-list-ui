import { useNavigate, Navigate } from "react-router-dom";
import CardLayout from "../layout/CardLayout";
import RegisterForm from "../components/RegisterForm";
import api from "../lib/api";
import useSession from '../hooks/session';

export default function Register() {
  const navigate = useNavigate();  const session = useSession();

  if (session) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = async (formData) => {
    api.register(formData)
      .then(() => navigate('/login'))
      .catch((error) => {
        console.error(error);
        alert(error.error);
      });
  };

  return (
    <CardLayout
      title="Welcome!"
      subtitle="Sign up to start using Simpledo today."
    >
      <RegisterForm onSubmit={onSubmit} />
    </CardLayout>
  )
}
