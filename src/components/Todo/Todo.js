import React from "react";
import "./Todo.css";
import Form from "../Form/Form";
import List from "../List/List";

function Todo(props) {
  const { valError} = props.props;

  return (
    <div>
      <div className="todoContainer">
        <div className="input-section">
          <Form props={props.props} />
          <p className={valError?'error':'noError'} >{valError}</p>
        </div>
        <ul>
          <List props={props.props} />
        </ul>
      </div>
    </div>
  );
}

export default Todo;
