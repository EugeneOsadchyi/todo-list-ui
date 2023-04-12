import { useCallback, useEffect, useState } from "react";
import CardLayout from "../layout/Card";
import TodosList from "../components/Todos/List";
import AddTodo from "../components/Todos/AddTodo";
import Filter from "../components/Todos/Filter";
import api from "../lib/api";

export default function SignIn() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const getTodos = useCallback(() => {
    api.getTodos({ filter })
      .then((todos) => {
        setTodos(todos);
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  }, [filter]);

  const onAddTodo = (title) => (
    api.createTodo({ title })
      .then((todo) => {
        setTodos((todos) => [...todos, todo]);
      })
  );

  const onToggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    const promise = todo.completed ? api.markTodoUncompleted(id) : api.markTodoCompleted(id);

    promise
      .then(getTodos)
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };

  const onRemoveTodo = (id) => (
    api.deleteTodo(id)
      .then(() => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
      })
  );

  useEffect(
    () => { getTodos(filter); },
    [getTodos, filter]
  );

  return (
    <CardLayout title="Todo List" >
      <AddTodo onAdd={onAddTodo} />
      <TodosList todos={todos} onCheck={onToggleTodo} onRemove={onRemoveTodo} />

      <Filter state={filter} setState={setFilter} />
    </CardLayout>
  )
}
