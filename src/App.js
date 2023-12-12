import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import TodoInputX from "./TodoInput";

function App() {
  const [items, setItems] = useState([]);

  function handleAddTodo(text) {
    if (text.trim() === "") {
      alert("Please do not enter empty string!");
    } else {
      setItems((oldList) => [text, ...oldList]);
    }
  }

  function removeItem(itemId) {
    setItems((oldItems) => oldItems.filter((item, idx) => itemId !== idx));
  }

  return (
    <div className="App">
      <h2>ToDo Application</h2>
      <TodoInputX onAddTodo={handleAddTodo} />
      <ul>
        {items.map((item, index) => (
          <ToDoItem
            key={index}
            itemText={item}
            removeItemFunction={() => removeItem(index)}
            id={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;