import "./App.css";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Completed from "./pages/Completed";
import { useState } from "react";
import Incomplete from "./pages/Incomplete";

function App() {
  const [toDos, setTodo] = useState([]);
  const [item, setItem] = useState("");

  const itemsSetting = (event) => {
    setItem(event.target.value);
  };
  const addItem = (event) => {
    event.preventDefault();
    setTodo([...toDos, { item, status: false }]);
    setItem("");
  };

  const delteOneItem = (dind) => {
    const finalList = toDos.filter((item, ind) => ind !== dind);
    setTodo(finalList);
  };
  const checkedfn = (item, status) => {
    const finalList = toDos.map((todo) =>
      todo === item ? { ...todo, status } : todo
    );

    setTodo(finalList);
  };

  const props = {
    toDos,
    item,
    itemsSetting,
    addItem,
    delteOneItem,
    checkedfn,
  };

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Todo props={props} />} />
          <Route path="/completed" element={<Completed props={props} />} />
          <Route path="/incomplete" element={<Incomplete props={props} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
