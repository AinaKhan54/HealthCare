import React from 'react';

// Define the props type
interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info'; // restricts type to specific values
  message: string;
  onClose: () => void; // function type with no arguments and no return value
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  // Alert styles based on type
  const alertStyles: Record<string, string> = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700',
  };

  return (
    <div className={`border-l-4 p-4 md:p-6 ${alertStyles[type]} rounded`} role="alert">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base lg:text-lg">{message}</p>
        <button 
          onClick={onClose} 
          className="mt-2 md:mt-0 text-xl md:text-2xl font-bold focus:outline-none"
          aria-label="Close alert"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Alert;
