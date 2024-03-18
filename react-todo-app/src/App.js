import { useState } from "react";
import "./App.css";

const initialstodos = ["wash the plate", "learn coding", "clean the kitchen"];

function App() {
  const [toDos, setToDos] = useState(initialstodos);

  function addNewToDo(toDo) {
    setToDos((toDos) => [...toDos, toDo]);
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <Todo toDos={toDos} />
      <button>Add ToDos</button>
      <AddTodo onAddToDo={addNewToDo} />
    </div>
  );
}

export default App;

function Button({ children, onClick }) {
  return (
    <button className="delete-item" onClick={onClick}>
      {children}
    </button>
  );
}

function Todo({ toDos }) {
  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {toDos.map((item) => (
          <li className="list-item">
            {[...item]}
            <Button>Delete</Button>
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
