import React, { useState } from "react";
import "./Todo.css";
import Form from "../Form/Form";
import List from "../List/List";
import Header from "../Header/Header";

function Todo() {
  const [toDos, setTodo] = useState([]);
  const [item, setItem] = useState("");

  const itemsSetting = (event) => {
    setItem(event.target.value);
  };
  const addItem = (event) => {
    event.preventDefault();
    setTodo([...toDos, item]);
    setItem('')
    
  };

  const delteOneItem=(dind)=>{
      let finalList=toDos.filter((item,ind)=>ind!==dind)
      setTodo(finalList)
  }

  return (
    <div>
      <Header />
      <div className="todoContainer">
        <div className="input-section">
          <Form props={{ toDos, item, itemsSetting, addItem }} />
        </div>
        <ul>
          <List props={{toDos,delteOneItem}} />

        </ul>
      </div>
    </div>
  );
}

export default Todo;
