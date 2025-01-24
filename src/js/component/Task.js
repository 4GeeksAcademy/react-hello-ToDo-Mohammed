import React, { useState } from 'react';

const Task = ({ task, taskIndex, deleteTask }) => {
  const [hover, setHover] = useState(false);
console.log("Task", Task)
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="task"
    >
      {task}
      {hover && (
        <button
          className="delete-btn"
          onClick={() => deleteTask(taskIndex)}
        >
          X
        </button>
      )}
    </li>
  );
};

export default Task;
