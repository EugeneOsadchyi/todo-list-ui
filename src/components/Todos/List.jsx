export default function List({ todos, checkTodoToggled, deleteTodoHandler }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <checkbox type="checkbox" onClick={() => checkTodoToggled(todo.id)} />
          <span>{todo.title}</span>
          <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
