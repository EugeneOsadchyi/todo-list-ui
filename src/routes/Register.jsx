import { useNavigate } from "react-router-dom";
import CardLayout from "../layout/Card";
import RegisterForm from "../components/RegisterForm";
import api from "../lib/api";

export default function Register() {
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    api.register(formData)
      .then(() => navigate('/login'))
      .catch((error) => {
        console.error(error);
        alert(error);
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
