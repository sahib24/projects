"use client";

import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
      setTask("");
    }
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (i !== indexToDelete) {
        updatedTasks.push(tasks[i]);
      }
    }
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-xl mx-auto p-8 rounded-xl">
      <h1 className="text-3xl font-semibold text-center mb-6">To-Do List</h1>
      <div className="flex mb-6">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a new task"
          className="flex-1 p-3 border border-gray-300"
        />
        <button onClick={addTask} className="px-6 py-3 bg-red-500 text-white">
          Add
        </button>
      </div>

      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-4 shadow-md"
          >
            <span className="text-lg">{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="px-4 py-2 bg-red-500 text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
