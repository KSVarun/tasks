import React, { useState, useRef, useEffect } from 'react';

import Tasks from './Components/Tasks';

import { Task } from './Interfaces/task';

import './App.css';

const App: React.FC = () => {
  const [tasks, updateTasks] = useState<Task[]>([]);
  const [name, setName] = useState<string>('');
  const id = useRef(1);

  useEffect(() => {
    id.current = id.current + 1;
  }, [tasks]);

  function addTask(e: any): void {
    e.preventDefault();
    updateTasks([...tasks, { name: name, id: id.current, completed: false }]);
    setName('');
  }

  function handleStrikeoutTask(id: number) {
    let currentTasks = [...tasks];
    currentTasks.forEach((task: Task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
    });
    updateTasks(currentTasks);
  }

  function handleInputChange(e: any): void {
    setName(e.target.value);
  }

  function handleTaskRemoval(id: number): void {
    updateTasks([...tasks].filter((task: Task) => task.id !== id));
  }

  return (
    <div className='App'>
      <Tasks
        tasks={tasks}
        handleStrikeoutTask={handleStrikeoutTask}
        handleTaskRemoval={handleTaskRemoval}
      />
      <form onSubmit={addTask}>
        <section>
          <div>
            <label htmlFor='taskInput'>Name</label>
            <input
              value={name}
              id='taskInput'
              type='text'
              onChange={handleInputChange}
            ></input>
            <button type='submit'>SUBMIT</button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default App;
