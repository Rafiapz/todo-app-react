import React from "react";
import "./Todo.css";
import Form from "../Form/Form";
import List from "../List/List";

function Todo(props) {
  const { toDos, item, itemsSetting, addItem, delteOneItem,completed,setCompleted,checkedfn } = props.props;

  return (
    <div>
      <div className="todoContainer">
        <div className="input-section">
          <Form props={{ toDos, item, itemsSetting, addItem }} />
        </div>
        <ul>
          <List props={{item, toDos, delteOneItem,completed,setCompleted,checkedfn }} />
        </ul>
      </div>
    </div>
  );
}

export default Todo;
