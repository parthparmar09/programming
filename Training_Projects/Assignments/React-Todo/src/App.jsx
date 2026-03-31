import { useState } from "react";
import "./App.css";
// import Articles from "./pages/Articles";
import Todo from "./pages/Todo";
import { TodoContext } from "./store/TodoContext";

function App() {
  const [todoItems, setTodoItems] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  return (
    <TodoContext.Provider value={{ todoItems, setTodoItems }}>
      <Todo />
    </TodoContext.Provider>
  );
}

export default App;
