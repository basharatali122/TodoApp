import React from "react";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <div className="container my-2">
      <div className="row align-items-center bg-light shadow-sm p-3 rounded">
        <div className="col-md-5 fw-semibold text-capitalize">{todoName}</div>
        <div className="col-md-5 text-muted">{todoDate}</div>
        <div className="col-md-2 text-end">
          <button
            onClick={() => onDeleteClick(todoName)}
            className="btn btn-outline-danger"
          >
            <MdDelete size={20} className="me-1" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
