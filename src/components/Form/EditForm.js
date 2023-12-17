import React, { useState } from "react";
import "./editForm.css";

function EditForm(props) {
  const { index, value } = props;
  const [editItem, setEditItem] = useState(value);
  const { setTodo, toDos, valEditError, setValeditError } = props.props;
  const editTodoItem = (event) => {
    setEditItem(event.target.value);
  };

  const updateTodo = (event) => {
    event.preventDefault();
    if (editItem.trim() == "") {
      setValeditError("Please enter a valid text");
      return;
    }
    setValeditError(false);
    setTodo(
      toDos.map((obj, i) => {
        if (i === index) {
          obj.item = editItem;
          obj.isEditing = false;
        }
        return obj;
      })
    );
  };

  return (
    <>
      <form className="editForm" action="">
        <input
          className="editInput"
          type="text"
          value={editItem}
          onChange={editTodoItem}
          placeholder="Update taks here...."
        />
        <button className="btnn" onClick={updateTodo} type="submit">
          Update
        </button>
      </form>
      <p className={valEditError ? "editerror" : "editnoError"}>
        {valEditError}
      </p>
    </>
  );
}

export default EditForm;
