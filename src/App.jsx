import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoName from "./Components/TodoName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import  { TodoItemsContext } from "./Components/ItemsContext-Store";

const App = () => {

  const {todoItems}=useContext(TodoItemsContext)
  return (
   
    <div className="d-flex flex-column  align-items-center min-vh-100">
      <TodoName />
      <AddTodo />
      {todoItems.length ===0 && <WelcomeMessage/>}
      <TodoItems  />
    </div>
   
  );
};

export default App;
