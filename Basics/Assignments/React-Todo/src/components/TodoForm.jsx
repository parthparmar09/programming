import { useContext, useEffect, useRef } from "react";
import { TodoContext } from "../store/TodoContext";

function TodoForm() {
  const { setTodoItems } = useContext(TodoContext);

  const TaskName = useRef();
  const TaskTime = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let task = TaskName.current.value;
    let time = TaskTime.current.value;

    if (!task || !time) {
      return;
    }
    time = time.split("T").reverse().join(" ");

    setTodoItems((curr) => [...curr, { task, time, status: false }]);

    TaskTime.current.value = null;
    TaskName.current.value = null;
  };

  const handleDelete = (e) => {
    if (window.confirm("This action will delete all of your tasks ...")) {
      setTodoItems([]);
    } else {
      window.alert("Task or Time can't be empty");
    }
  };

  useEffect(() => {
    TaskName.current.focus();
  }, []);
  return (
    <form
      className=" d-flex flex-column align-items-center"
      onSubmit={handleSubmit}
    >
      <div className="container input-group">
        <input
          ref={TaskName}
          type="text "
          className="form-control "
          placeholder="enter your task here..."
        />

        <input type="datetime-local" ref={TaskTime} className="form-control" />
      </div>
      <div className=" container input-group mt-3 d-flex justify-content-center">
        <button type="submit " className="btn btn-success px-4">
          Add Task
        </button>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          Remove All
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
