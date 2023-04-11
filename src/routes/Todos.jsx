import { useEffect, useState } from "react";
import CardLayout from "../layout/Card";
import TodosList from "../components/Todos/List";
import AddTodo from "../components/Todos/AddTodo";
import Filter from "../components/Todos/Filter";
import api from "../lib/api";

export default function SignIn() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    api.getTodos(filter)
      .then((todos) => {
        setTodos(todos);
      })
      .catch((error) => {
        console.error(error);
      });
    }, [filter]
  )

  const onAddTodo = (title) => (
    api.createTodo({ title })
      .then((todo) => {
        setTodos((todos) => [...todos, todo]);
      })
  );

  const onRemoveTodo = (id) => (
    api.deleteTodoById(id)
      .then(() => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
      })
  );

  return (
    <CardLayout
      title="Todo List"
    >
      <AddTodo onAdd={onAddTodo} />
      <TodosList todos={todos} onRemoveTodo={onRemoveTodo} />

      <Filter state={filter} setState={setFilter} />
    </CardLayout>
  )
}
