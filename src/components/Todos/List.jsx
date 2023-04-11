import ListItem from "./ListItem";
import "./Todos.css";

export default function List({ todos, checkTodoToggled = () => {}, onRemoveTodo = () => {} }) {
  return (
    <ul className="TodosList">
      {todos.map((todo) => <ListItem key={todo.id} todo={todo} onDelete={onRemoveTodo} />)}
    </ul>
  );
}
