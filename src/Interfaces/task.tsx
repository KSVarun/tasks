export interface Task {
  id: number;
  name: string;
  completed: boolean;
  description: string;
  owner: string;
}

export interface TaskProps {
  tasks: Task[];
  handleStrikeoutTask(id: number): void;
  handleTaskRemoval(e: React.MouseEvent, id: number): void;
}
