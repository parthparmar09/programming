import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";
import TodoItem from "./TodoItem";

function TodoItemContainer() {
  const { todoItems } = useContext(TodoContext);

  return (
    <table className="table table-striped mt-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task</th>
          <th scope="col">Time</th>
          <th scope="col">Status</th>
          <th scope="col">Toggle</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {todoItems.length !== 0 ? (
          todoItems.map((item, index) => (
            <TodoItem key={index} item={item} index={index} />
          ))
        ) : (
          <tr>
            {" "}
            <td colSpan="6" className="text-muted text-center">
              {" "}
              No tasks to display
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TodoItemContainer;
