import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import Input from "./UI/Input";
import ButtonGroup from "./UI/ButtonGroup";

const initialState = {
  email: "",
  password: "",
};

export default function LoginForm({ onSubmit }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <Link to="/register">Don't have an account? Sign up.</Link>

      <ButtonGroup>
        <Button type="submit">Log In</Button>
      </ButtonGroup>
    </form>
  );
}
