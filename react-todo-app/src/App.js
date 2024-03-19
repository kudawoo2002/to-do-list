import { useState } from "react";
import "./App.css";

const initialstodos = ["wash the plate", "learn coding", "clean the kitchen"];

function App() {
  const [toDos, setToDos] = useState(initialstodos);
  // const [isClick, setIsClick] = useState(false);

  // function handleClick() {
  //   setIsClick(true);
  // }

  function deleteToDo(id) {
    setToDos((toDos) => toDos.filter((todo, index) => todo[index] !== id));
  }

  function addNewToDo(toDo) {
    setToDos((toDos) => [...toDos, toDo]);
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <Todo toDos={toDos} onDelTodo={deleteToDo} />
      <button>Add ToDos</button>
      <AddTodo onAddToDo={addNewToDo} />
    </div>
  );
}

export default App;

function Button({ children, onClick }) {
  return (
    <button className="delete-item del-item" onClick={onClick}>
      {children}
    </button>
  );
}

function Todo({ toDos, onDelTodo }) {
  console.log(toDos);
  console.log(toDos.length);
  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {toDos.map((item, index) => (
          <li className="list-item" key={index}>
            {[...item]}
            <Button onClick={() => onDelTodo(item[index])} className="del-item">
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AddTodo({ onAddToDo }) {
  const [newToDo, setNewToDo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!newToDo) return;
    const addNewToDo = newToDo;

    onAddToDo(addNewToDo);
    setNewToDo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>To-Do Name</label>
      <input
        type="text"
        name="todo"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
