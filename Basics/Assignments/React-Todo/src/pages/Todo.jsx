import TodoForm from "../components/TodoForm";
import TodoItemContainer from "../components/TodoItemContainer";

function Todo() {
  return (
    <div className="container w-75 w-sm-100">
      <h1 className="text-center mt-4"> ToDo List</h1>
      <TodoForm />
      <TodoItemContainer />
    </div>
  );
}

export default Todo;
