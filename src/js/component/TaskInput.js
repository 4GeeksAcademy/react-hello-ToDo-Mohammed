import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Añadir tarea..."
    />
  );
};

export default TaskInput;
