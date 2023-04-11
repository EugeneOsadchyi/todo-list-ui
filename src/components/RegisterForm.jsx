import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import Input from "./UI/Input";
import ButtonGroup from "./UI/ButtonGroup";

const initialState = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

export default function RegisterForm({ onSubmit }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" name="name" onChange={handleChange} placeholder="Full Name" />
      <Input type="text" name="email" onChange={handleChange} placeholder="Email" />
      <Input type="password" name="password" onChange={handleChange} placeholder="Password" />
      <Input type="password" name="passwordConfirmation" onChange={handleChange} placeholder="Password Confirmation" />

      <Link to="/login">Do have an account? Sign in.</Link>

      <ButtonGroup>
        <Button type="submit">Sign Up</Button>
      </ButtonGroup>
    </form>
  );
}
