import React, { useState } from "react";

function TodoInputX({ onAddTodo }) {
  const [text, setText] = useState("");

  function onTextChange(event) {
    setText(event.target.value);
  }

  function handleAddTodo() {
    if (text.trim() === "") {
      alert("Please enter a non-empty Todo item!");
    } else {
      onAddTodo(text);
      setText("");
    }
  }

  return (
    <div>
      <input onChange={onTextChange} type="text" value={text} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoInputX;