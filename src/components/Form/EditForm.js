import React, { useState } from "react";
import "./editForm.css";

function EditForm(props) {
  const { index, value } = props;
  const [editItem, setEditItem] = useState(value);
  const { setTodo, toDos } = props.props;
  const editTodoItem = (event) => {
    setEditItem(event.target.value);
  };

  const updateTodo = (event) => {
    event.preventDefault();
    if (editItem.trim() === "") {
      setTodo(
        toDos.map((obj, i) => {
          if (i === index) {
            obj.valEditError = "Please enter a valid task";
          }
          return obj;
        })
      );
      return;
    } else {
      let duplicate = false;
      toDos.map((obj,i) => {
        if (obj.item === editItem && i!==index) {
          duplicate = true;
          alert("This task already added");
        }
        return obj
      });

      if (duplicate) {
        return;
      }
      setTodo(
        toDos.map((obj, i) => {
          if (i === index) {
            obj.item = editItem;
            obj.isEditing = false;
            obj.valEditError = false;
          }
          return obj;
        })
      );
    }
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
      <p className={toDos[index].valEditError ? "editerror" : "editnoError"}>
        {toDos[index].valEditError}
      </p>
    </>
  );
}

export default EditForm;
