import { useState } from "react";
import Input from "../UI/Input";

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(title).then(() => setTitle(""));
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" name="title" value={title} onChange={handleChange} placeholder="Add a new todo" />
    </form>
  )
}
