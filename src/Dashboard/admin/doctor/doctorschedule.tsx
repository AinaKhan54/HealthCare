import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import TaskModal from '../../../Components/CardComponent/taskComponent';

interface CalendarProps {
  onChange: (date: Date) => void;
  value: Date;
  tasks: Task[];
  getTasksForDate: (date: Date) => Task[];
  onDayClick: (date: Date) => void;
}

interface Task {
  id: number;
  date: Date;
  description: string;
}

const DoctorSchedule: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
    setIsModalOpen(true); // Open the modal when a date is clicked
  };

  const handleAddTask = () => {
    if (taskInput) {
      const taskCountForDate = tasks.filter(task => 
        task.date.toDateString() === selectedDate.toDateString()
      ).length;

      if (taskCountForDate < 10) {
        const newTask: Task = { id: tasks.length + 1, date: selectedDate, description: taskInput };
        setTasks([...tasks, newTask]);
        setTaskInput('');
      } else {
        alert('You can only add up to 10 tasks per day.');
      }
    }
  };

  const getTasksForDate = (date: Date): Task[] => {
    return tasks.filter(task => 
      task.date.toDateString() === date.toDateString()
    );
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="p-2 ml-[450px] max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-purple-800 text-center">Schedule Task</h1>
      <div className="mb-30">
        <Calendar 
          onChange={handleDateChange} 
          value={selectedDate} 
          tasks={tasks} 
          getTasksForDate={getTasksForDate}
          onDayClick={handleDateChange}
        />
      </div>
      <div className="bg-purple-100 p-4 rounded-lg shadow-md mt-10">
        <h3 className="text-xl font-semibold mb-2">Tasks for {selectedDate.toDateString()}</h3>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
          className="border border-purple-300 p-2 rounded w-full mb-2"
        />
        <button
          onClick={handleAddTask}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Add Task
        </button>
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        date={selectedDate}
        tasks={getTasksForDate(selectedDate)}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

const Calendar: React.FC<CalendarProps> = ({ onChange, value, tasks, getTasksForDate, onDayClick }) => {
  const [currentDate, setCurrentDate] = useState<Date>(value);

  const getDaysInMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    const newDate = new Date(currentDate);
    if (direction === 'left') {
      newDate.setMonth(currentDate.getMonth() - 1);
    } else {
      newDate.setMonth(currentDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
    onChange(newDate);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(event.target.value, 10);
    const newDate = new Date(currentDate);
    newDate.setFullYear(newYear);
    setCurrentDate(newDate);
    onChange(newDate);
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const calendarDays = [];
  
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="w-16 h-16"></div>);
    }
  
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const tasksForDate = getTasksForDate(date);
      calendarDays.push(
        <div
          key={day}
          onClick={() => onDayClick(date)}
          className="w-29 h-28 p-10 border border-purple-200 rounded-lg text-purple-900 text-center hover:bg-purple-300 transition duration-300 ease-in-out flex items-center justify-center relative cursor-pointer"
        >
          <span className="text-lg font-semibold">{day}</span>
          {tasksForDate.length > 0 && (
            <div className="absolute bottom-1 left-1 text-xs bg-pink-100 text-purple-600 rounded-full px-1 py-0.5">
              {tasksForDate.length > 3 ? `${tasksForDate.length} tasks` : tasksForDate.map((task: Task, index: number) => (
                <div key={index} className="whitespace-nowrap overflow-hidden text-ellipsis">{task.description}</div>
              ))}
            </div>
          )}
        </div>
      );
    }
  
    return calendarDays;
  };

  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="border border-purple-500 rounded-lg overflow-hidden shadow-md mx-auto max-w-4xl">
      <div className="p-2 bg-purple-200 flex justify-between items-center">
        <button className="text-sm px-2" onClick={() => handleSwipe('left')}>&lt;</button>
        <span className="text-center font-semibold">{formattedDate}</span>
        <button className="text-sm px-2" onClick={() => handleSwipe('right')}>&gt;</button>

        <select
          className="ml-4 border border-purple-300 rounded p-2"
          value={currentDate.getFullYear()}
          onChange={handleYearChange}
        >
          {Array.from({ length: 100 }, (_, i) => i + currentDate.getFullYear() - 5).map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-7 gap-1 text-center text-sm font-semibold text-purple-900 ml-8">
          {weekDays.map((day, index) => (
            <div key={index} className="w-16 h-8 flex items-center justify-center">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {generateCalendar()}
        </div>
      </div>
    </div>
  );
};

export default DoctorSchedule;
