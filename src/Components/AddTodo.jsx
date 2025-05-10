import { useRef, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const [isDisabled, setIsDisabled] = useState(true);

  const handleInputChange = () => {
    const name = todoNameElement.current.value.trim();
    const date = dueDateElement.current.value.trim();
    setIsDisabled(!(name && date));
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value.trim();
    const dueDate = dueDateElement.current.value.trim();

    if (!todoName || !dueDate) return;

    onNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    setIsDisabled(true);
  };

  return (
    <div className="container my-4">
      <form className="row g-3 align-items-center justify-content-center" onSubmit={handleAddButtonClicked}>
        <div className="col-md-5">
          <input
            type="text"
            ref={todoNameElement}
            onChange={handleInputChange}
            placeholder="Enter your task..."
            className="form-control shadow-sm"
          />
        </div>
        <div className="col-md-4">
          <input
            type="date"
            ref={dueDateElement}
            onChange={handleInputChange}
            className="form-control shadow-sm"
          />
        </div>
        <div className="col-md-2 d-grid">
          <button type="submit" className="btn btn-success shadow" disabled={isDisabled}>
            <BiMessageAdd size={20} className="me-2" />
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
