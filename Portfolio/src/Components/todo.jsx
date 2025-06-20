import React, { useState, useEffect } from 'react';
import './todo.css';
import { v4 as uuidv4 } from 'uuid';

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    const trimmed = text.trim();
    if (trimmed) {
      onAdd(trimmed);
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="todo-input-group">
      <input
        type="text"
        className="todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add new task..."
        aria-label="Add new task"
      />
      <button onClick={handleAdd} className="todo-add-button">
        Add
      </button>
    </div>
  );
};

const TodoItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggle(task.id)} className="todo-text" role="button">
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)} className="todo-delete-button">
        Delete
      </button>
    </div>
  );
};

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('myTodos'));
      if (Array.isArray(saved)) {
        setTasks(saved);
      }
    } catch {
      setTasks([]);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('myTodos', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (tasks.some(task => task.text.toLowerCase() === text.toLowerCase())) return;
    setTasks([...tasks, { id: uuidv4(), text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear all tasks?')) {
      setTasks([]);
    }
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="todo-container">
      <h1 className="todo-title">📝 My To-Do List</h1>
      <TodoInput onAdd={addTask} />
      <div className="todo-summary">
        <span>{tasks.length} Task(s) | ✅ {completedCount} Completed</span>
        {tasks.length > 0 && (
          <button className="clear-all-button" onClick={clearAll}>
            Clear All
          </button>
        )}
      </div>
      <div>
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
