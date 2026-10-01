import React from 'react';

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
      <label style={{ cursor: 'pointer' }}>
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleTask(task.id)} 
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none', marginLeft: '8px' }}>
          {task.title}
        </span>
      </label>
      <button onClick={() => deleteTask(task.id)} style={{ cursor: 'pointer' }}>
        [Xóa]
      </button>
    </div>
  );
}