import ListItem from "./ListItem";
import "./Todos.css";

export default function List({ todos, onCheck, onRemove }) {
  return (
    <ul className="TodosList">
      {todos.map((todo) => <ListItem key={todo.id} todo={todo} onCheck={onCheck} onDelete={onRemove} />)}
    </ul>
  );
}
