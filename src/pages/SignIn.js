import CardLayout from "../layout/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import ButtonGroup from "../components/ButtonGroup";

export default function SignIn() {
  return (
    <CardLayout
      title="Welcome back!"
      subtitle="Log in to continue."
    >
      <Input type="text" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />

      <a href="#">Don’t have an account? Sign up.</a>

      <ButtonGroup>
        <Button>
          Log In
        </Button>
      </ButtonGroup>
    </CardLayout>
  )
}
