import React, { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import useLocalStorage from './hooks/useLocalStorage';

// Import dữ liệu từ file tasks.js vừa tạo
import { initialTasks } from './tasks'; 



export default function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', initialTasks);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (title) => setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  const filteredTasks = tasks.filter(task => {
    const matchSearch = task.title.toLowerCase().includes(search.toLowerCase());
    if (filter === 'completed') return task.completed && matchSearch;
    if (filter === 'pending') return !task.completed && matchSearch;
    return matchSearch;
  });

  return (
    <div style={{ maxWidth: '450px', margin: '0 auto' }}>
      <Header />
      <TaskForm addTask={addTask} />

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0' }}>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">[ Tất cả ]</option>
          <option value="pending">[ Chưa làm ]</option>
          <option value="completed">[ Hoàn thành ]</option>
        </select>
        <input 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
          placeholder="[ Tìm kiếm... ]" 
          style={{ padding: '2px' }}
        />
      </div>

      <p style={{ paddingBottom: '10px', borderBottom: '1px dashed currentColor' }}>
        Tổng: {tasks.length} | Chưa làm: {tasks.filter(t => !t.completed).length} | Hoàn thành: {tasks.filter(t => t.completed).length}
      </p>

      <TaskList 
        tasks={filteredTasks} 
        toggleTask={toggleTask} 
        deleteTask={deleteTask} 
      />
    </div>
  );
}