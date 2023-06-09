import Checkbox from "../UI/Checkbox/Checkbox";
import deleteIcon from "../../assets/images/delete.svg";

export default function ListItem({ todo, onCheck, onDelete }) {
  return (
    <li>
      <Checkbox label={todo.title} checked={todo.completed} onChange={() => onCheck(todo.id)} />
      <DeleteButton onClick={() => onDelete(todo.id) } />
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
