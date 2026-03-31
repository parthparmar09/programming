import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";

function TodoItem({ item, index }) {
  const { todoItems, setTodoItems } = useContext(TodoContext);

  const deleteItem = (index, e) => {
    let temp = [...todoItems];
    temp.splice(index, 1);
    setTodoItems(temp);
    localStorage.setItem("tasks", JSON.stringify(temp));
  };

  const checkItem = (index, e) => {
    let temp = [...todoItems];
    temp[index].status = !temp[index].status;
    setTodoItems(temp);

    localStorage.setItem("tasks", JSON.stringify(temp));
  };

  return (
    <tr className="">
      <td>{index + 1}</td>
      <td className={`w-50 ${item.status && "text-decoration-line-through"}`}>
        {item.task}
      </td>
      <td className={item.status ? "text-decoration-line-through" : ""}>
        {item.time}
      </td>
      <td className={item.status ? "text-success" : "text-warning"}>
        {item.status ? "Complete" : "Pending"}
      </td>
      <td>
        <div className="form-check form-switch d-flex align-items-center">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            checked={item.status}
            id="flexSwitchCheckDefault"
            onInput={(e) => checkItem(index, e)}
          />
        </div>
      </td>
      <td>
        <button
          className="btn btn-sm btn-danger"
          onClick={(e) => deleteItem(index, e)}
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;
