import React, { useState, useCallback, useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Tasks from './Tasks';

import { Task } from '../Interfaces/task';

import { getId } from '../Utils/taskUtils';

import '../Styles/App.scss';

const App: React.FC = () => {
  const [tasks, updateTasks] = useState<Task[]>([]);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const nameFieldRef = useRef<HTMLInputElement>();

  const nextId = useCallback(getId(), []);

  function addTask(e: any): void {
    e.preventDefault();
    updateTasks([
      ...tasks,
      {
        name: name,
        id: nextId(),
        completed: false,
        description: description,
        owner: ''
      }
    ]);
    setName('');
    setDescription('');
    nameFieldRef.current?.focus();
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

  function handleTaskNameChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value);
  }

  function handleTaskDescriptionChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    setDescription(e.target.value);
  }

  function handleTaskRemoval(e: React.MouseEvent, id: number): void {
    e.stopPropagation();
    updateTasks([...tasks].filter((task: Task) => task.id !== id));
  }

  return (
    <div className='App'>
      <form onSubmit={addTask}>
        <section>
          <div>
            <TextField
              id='name'
              label='Name'
              onChange={handleTaskNameChange}
              value={name}
              autoFocus
              inputRef={nameFieldRef}
            />
            <TextField
              id='description'
              label='Description'
              onChange={handleTaskDescriptionChange}
              value={description}
            />
          </div>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disableElevation
          >
            SUBMIT
          </Button>
        </section>
      </form>
      <Tasks
        tasks={tasks}
        handleStrikeoutTask={handleStrikeoutTask}
        handleTaskRemoval={handleTaskRemoval}
      />
    </div>
  );
};

export default App;
