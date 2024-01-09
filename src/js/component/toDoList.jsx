import React, { useState } from "react";

//create your first component
const ToDoList = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [tasksCount, setTasksCount] = useState(0);

  function addTask(e) {
    if (newTask == "") {
      alert("Please input a task");
    } else {
      e.preventDefault();
      setTasks([...tasks, newTask]);
      setNewTask("");
      setTasksCount(tasksCount + 1);
    }
  }

  function removeTask() {
    setTasksCount(tasksCount - 1);
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <ul className="list-group shadow-lg col-4 p-0">
        <h1 className="display-5 text-center list-group-item list-group-item-info m-0">
          My Tasks
        </h1>

        <form>
          <div>
            <input
              type="text"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
              className="form-control list-group-item px-5"
            />
          </div>
          <button type="submit" onClick={addTask} className="d-none"></button>
        </form>
        {tasks.length == 0 ? (
          <li className="list-group-item px-4 text-success">
            Just chill <i className="far fa-grin-stars"></i>
          </li>
        ) : (
          tasks.map((task, index) => (
            <li
              className="list-group-item ps-5 d-flex justify-content-between"
              key={index}
            >
              {task}{" "}
              <button className="btn" onClick={removeTask}>
                <i id="trash" className="fas fa-trash-alt text-white"></i>
              </button>
            </li>
          ))
        )}

        <li className="list-group-item list-group-item-light ps-3" style={{fontSize: "12px"}}>
          {tasksCount == 0
            ? "No pending tasks"
            : tasksCount == 1
            ? "1 pending task"
            : `${tasksCount} pending tasks`}
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
