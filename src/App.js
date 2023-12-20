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
  const [valError, setError] = useState(false);
 
  const itemsSetting = (event) => {
    setItem(event.target.value);
  };
  const addItem = (event) => {
    event.preventDefault();

    if (item.trim() === "") {
      setError("This field is required");
      return;
    }
     else {
      let duplicate=false
      toDos.forEach((obj)=>{

        if(obj.item===item){
          setError('This task already added')
          duplicate=true
          return
        }
      })
      if(!duplicate){
      setError(false);
      setTodo([...toDos, { item, status: false, isEditing: false,valEditError:false }]);
      setItem("");
      }

    }
  };
  const editTodo = (index) => {
    setTodo(
      toDos.map((obj, i) => {
        if (i === index) {
          obj.isEditing = !obj.isEditing;
        }
        return obj;
      })
    );
  };
  const delteOneItem = (dind) => {
    setTodo(toDos.filter((item, ind) => ind !== dind));
  };
  const checkedfn = (item, status) => {
    setTodo(toDos.map((todo) => (todo === item ? { ...todo, status } : todo)));
  };

  const props = {
    toDos,
    item,
    valError,
    itemsSetting,
    addItem,
    delteOneItem,
    checkedfn,
    editTodo,
    setItem,
    setTodo,
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
