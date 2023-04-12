import { useCallback, useEffect, useState } from "react";
import CardLayout from "../layout/CardLayout";
import TodosList from "../components/Todos/List";
import AddTodo from "../components/Todos/AddTodo";
import Filter from "../components/Todos/Filter";
import api from "../lib/api";
import Loader from "../components/UI/Loader/Loader";

export default function SignIn() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  const getTodos = useCallback(() => {
    setLoading(true);

    api.getTodos({ filter })
      .then((todos) => {
        setTodos(todos);
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
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

      {loading && <Loader />}
      {!loading && <TodosList todos={todos} onCheck={onToggleTodo} onRemove={onRemoveTodo} />}

      <Filter state={filter} setState={setFilter} />
    </CardLayout>
  )
}
