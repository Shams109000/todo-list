import React, { memo, useState, useEffect } from 'react';
import './Todo.css';

function Todo() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    const getFromLS = JSON.parse(localStorage.getItem('list'));
    if (getFromLS) setList(getFromLS);
  }, []);

  useEffect(() => {
    if (list.length > 0) localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  // Function to add a new task
  function AddData() {
    if (!name) {
      alert('Please write something');
    } else {
      const data = {
        id: Math.random(),
        name: name,
        completed: false, // Initialize each task as not completed
      };
      setList([data, ...list]);
      setName('');
    }
  }

  // Function to delete a task
  function Delete(id) {
    const updatedList = list.filter((task) => task.id !== id);
    setList(updatedList);
  }

  // Function to initiate edit mode
  function Update(id) {
    setToggle(false);
    const taskToEdit = list.find((task) => task.id === id);
    setName(taskToEdit.name);
    setEdit(id);
  }

  // Function to save the updated task
  function UpdateData() {
    const updatedList = list.map((task) => {
      if (task.id === edit) {
        task.name = name;
      }
      return task;
    });
    setList(updatedList);
    setEdit(null);
    setName('');
    setToggle(true);
  }

  // Toggle completion status of a task
  function toggleComplete(id) {
    const updatedList = list.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setList(updatedList);
  }

  return (
    <div className="todo-container">
      <h1>Task Manager</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your task here"
      />
      {toggle ? (
        <button className="btn btn-dark" onClick={AddData}>
          Add Task
        </button>
      ) : (
        <button onClick={UpdateData}>Update Task</button>
      )}

      <div className="task-list">
        {list && list.length > 0 ? (
          list.map((task) => (
            <div className="task-item" key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <h5 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name}
              </h5>
              <button onClick={() => Delete(task.id)}>Delete</button>
              <button onClick={() => Update(task.id)}>Edit</button>
            </div>
          ))
        ) : (
          <p>No tasks yet</p>
        )}
      </div>
    </div>
  );
}

export default memo(Todo);
