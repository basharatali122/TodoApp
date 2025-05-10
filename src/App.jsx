import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoName from "./Components/TodoName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";

const App = () => {
 const [todoItems, setTodoItems] = useState([]);
 
  const addTodoItems = (itemName, itemDate) => {
    const newtodoItems = [...todoItems, { name: itemName, date: itemDate }];

    setTodoItems(newtodoItems);
  };

  const handleDeleteItems = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="d-flex flex-column  align-items-center min-vh-100">
      <TodoName />
      <AddTodo onNewItem={addTodoItems}/>
      {todoItems.length ===0 && <WelcomeMessage/>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItems} />
    </div>
  );
};

export default App;
