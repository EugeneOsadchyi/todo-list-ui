import CardLayout from "../layout/Card";
import TodosList from "../components/Todos/List";
import AddTodo from "../components/Todos/AddTodo";

export default function SignIn() {
  const todos = [
    { id: 1, title: "Todo 1" },
  ];

  return (
    <CardLayout
      title="Todo List"
    >
      <AddTodo />
      <TodosList todos={todos} />
    </CardLayout>
  )
}
