import CardLayout from "../layout/Card";
import Input from "../components/UI/Input";

export default function SignIn() {
  return (
    <CardLayout
      title="Todo List"
    >
      <form>
        <Input type="text" name="title" placeholder="Add a new todo" />
      </form>
    </CardLayout>
  )
}
