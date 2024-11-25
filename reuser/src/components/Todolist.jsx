import { useState } from "react";


function TodoList() {
    const [tasks, setTasks] = useState([
        "Task 0",
    ]);
  
    function addTask(task) {
      setTasks([...tasks, task]);
    }

  
    return (
      <div>
        <button onClick={() => addTask("New Task")}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
}

export default TodoList;