import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

interface Task {
  id: number;
  date: Date;
  description: string;
}

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  date: Date;
  tasks: Task[];
  onUpdateTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, date, tasks, onUpdateTask, onDeleteTask }) => {
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [taskInput, setTaskInput] = useState<string>('');

  const handleTaskEdit = (task: Task) => {
    setEditingTask(task);
    setTaskInput(task.description);
  };

  const handleSaveEdit = () => {
    if (editingTask && taskInput) {
      onUpdateTask({ ...editingTask, description: taskInput });
      setEditingTask(null);
      setTaskInput('');
    }
  };

  return (
    isOpen ? (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto sm:w-3/4 md:w-1/2 lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4 text-center">Tasks for {date.toDateString()}</h2>
          <ul className="mb-4">
            {tasks.map(task => (
              <li key={task.id} className="flex flex-col sm:flex-row justify-between items-center mb-2">
                <span className="mb-2 sm:mb-0">{task.description}</span>
                <div className="flex space-x-2">
                  <button onClick={() => handleTaskEdit(task)} className="text-blue-500 hover:text-blue-700 text-sm sm:text-base">Edit</button>
                  <button onClick={() => onDeleteTask(task.id)} className="text-red-500 hover:text-red-700 text-sm sm:text-base">Delete</button>
                </div>
              </li>
            ))}
          </ul>
          {editingTask && (
            <div className="mt-4">
              <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full mb-2 text-sm sm:text-base"
              />
              <button
                onClick={handleSaveEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm sm:text-base"
              >
                Save
              </button>
            </div>
          )}
          <button
            onClick={onClose}
            className="mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 w-full text-sm sm:text-base"
          >
            Close
          </button>
        </div>
      </div>
    ) : null
  );
};

export default TaskModal;