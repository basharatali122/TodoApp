import React, { useContext, useState } from "react";

import TodoItem from "./TodoItem";
import { TodoItemsContext } from "./ItemsContext-Store";
const TodoItems = () => {


  const {todoItems,deleteItem}=useContext(TodoItemsContext)


  return (
    <div className="container">
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={deleteItem}
        />
      ))}
    </div>
  );
};

export default TodoItems;
