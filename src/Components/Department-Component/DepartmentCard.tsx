import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import arrow icon

interface DepartmentCardProps {
  departments: string[];
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ departments }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 w-full sm:w-3/4 md:w-2/3 lg:w-1/2"> {/* Adjust width here */}
      <h2 className="text-xl font-semibold mb-4 text-center">All Departments</h2>
      <ul className="space-y-2">
        {departments.map((dept, index) => (
          <li key={index} className="flex items-center justify-between p-2 bg-purple-100 rounded hover:bg-purple-300 transition-colors duration-200">
            <span>{dept}</span>
            <FaArrowRight className="text-purple-500" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentCard;
