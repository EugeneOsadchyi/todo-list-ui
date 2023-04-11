import Checkbox from "../UI/Checkbox/Checkbox";
import deleteIcon from "./deleteIcon.svg";

export default function ListItem({ todo, checkTodoToggled, deleteTodoHandler }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Checkbox label={todo.title} onClick={() => checkTodoToggled(todo.id)} />
      <DeleteButton onClick={() => deleteTodoHandler(todo.id) } />
    </li>
  );
};

function DeleteButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <img src={deleteIcon} alt="Delete" />
    </button>
  );
}
