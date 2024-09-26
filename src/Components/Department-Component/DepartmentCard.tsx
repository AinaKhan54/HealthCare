import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

interface Department {
  name: string;
  link: string;
}

interface DepartmentCardProps {
  departments: Department[];
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ departments }) => {
  const navigate = useNavigate();

  const handleDepartmentClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
      <h2 className="text-xl font-semibold mb-4 text-center">All Departments</h2>
      <ul className="space-y-2">
        {departments.map((dept) => (
          <li
            key={dept.name}
            className="flex items-center justify-between p-2 bg-purple-100 rounded hover:bg-purple-300 transition-colors duration-200 cursor-pointer"
            onClick={() => handleDepartmentClick(dept.link)}
          >
            <span>{dept.name}</span>
            <FaArrowRight className="text-purple-500" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentCard;
