import Input from "../UI/Input";

export default function AddTodo() {
  return (
    <form>
      <Input type="text" name="title" placeholder="Add a new todo" />
    </form>
  )
}
