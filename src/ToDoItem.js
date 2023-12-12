import React from "react";

export default function ToDoItem({ itemText, removeItemFunction, id }) {
  return (
    <div className="todo-item" onClick={() => removeItemFunction(id)}>
      <li>{itemText}</li>
    </div>
  );
}