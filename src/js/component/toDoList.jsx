import React, { useState } from "react";

//create your first component
const ToDoList = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(e) {
    e.preventDefault(); 
    setTasks([...tasks, newTask]);
    setNewTask("");
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
        {tasks.map((task, index) => (
          <li className="list-group-item px-5 d-flex justify-content-between" key={index}>{task} <button className="btn"><i id="trash" className="fas fa-trash-alt text-white"></i></button></li>
        ))}

        <li className="list-group-item list-group-item-light px-4">
          # items left
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
