import React from 'react';

import { Task } from '../Interfaces/task';

type TaskProps = {
  tasks: Task[];
  handleStrikeoutTask(id: number): void;
  handleTaskRemoval(id: number): void;
};

function Tasks({ tasks, handleStrikeoutTask, handleTaskRemoval }: TaskProps) {
  return (
    <section>
      {tasks.map((task: Task) => (
        <div key={task.id} className='task'>
          <div
            className={task.completed ? 'bought' : 'not-bought'}
            onClick={() => handleStrikeoutTask(task.id)}
          >
            {task.name}
          </div>
          <div
            className='remove-task'
            onClick={() => handleTaskRemoval(task.id)}
          >
            X
          </div>
        </div>
      ))}
    </section>
  );
}

export default Tasks;
