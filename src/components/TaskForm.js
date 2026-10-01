import React, { useState } from 'react';

export default function TaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '15px 0' }}>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="[ Nhập tên công việc... ]" 
        style={{ padding: '4px', width: '200px' }}
      />
      <button type="submit" style={{ marginLeft: '10px' }}>[Thêm]</button>
    </form>
  );
}