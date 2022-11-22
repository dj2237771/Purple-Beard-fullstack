import React from "react";
import { useState } from "react";
function ToDoForm() {
  const [toDos, setToDos] = useState([]);
  const [todoName, setInput] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    setToDos([...toDos, { id: toDos.length, name: todoName }]);
    setInput("");
  };
  const inputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="add to do"
          value={todoName}
          name="text"
          className="todo-input"
          onChange={inputChange}
        />
        <button name="btn">Add</button>
      </form>
      <div key={1}>
        {toDos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </div>
    </div>
  );
}

export default ToDoForm;
