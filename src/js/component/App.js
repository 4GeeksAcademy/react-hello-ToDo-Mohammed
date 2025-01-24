import React, { useState } from 'react';

import TaskInput from './TaskInput';
import TaskList from './taskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      {tasks.length === 0 && <p>No hay tareas, añade tareas.</p>}
    </div>
  );
};

export default App;
