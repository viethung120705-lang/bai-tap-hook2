import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            toggleTask={toggleTask} 
            deleteTask={deleteTask} 
          />
        ))
      ) : (
        <p>Không có công việc nào.</p>
      )}
    </div>
  );
}