import CloseIcon from '@material-ui/icons/Close';

import { Task, TaskProps } from '../Interfaces/task';

function Tasks({ tasks, handleStrikeoutTask, handleTaskRemoval }: TaskProps) {
  return (
    <section className='tasks-section'>
      {tasks.length > 0 ? (
        tasks.map((task: Task) => (
          <div
            key={task.id}
            className={
              task.completed ? 'task-card completed' : 'task-card not-completed'
            }
            onClick={() => handleStrikeoutTask(task.id)}
          >
            <div className='task-details'>
              <div className='task-name'>{task.name}</div>
              <div className='task-description'>{task.description}</div>
            </div>
            <div
              className='cancel-button'
              onClick={(e) => handleTaskRemoval(e, task.id)}
            >
              <CloseIcon />
            </div>
          </div>
        ))
      ) : (
        <div className='empty-tasks'>No Tasks</div>
      )}
    </section>
  );
}

export default Tasks;
