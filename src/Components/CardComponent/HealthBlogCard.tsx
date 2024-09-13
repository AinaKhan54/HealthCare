import React from 'react';

interface HealthBlogCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
}

const HealthBlogCard: React.FC<HealthBlogCardProps> = ({ title, description, image, date }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 max-w-sm sm:max-w-md lg:max-w-lg transform transition duration-300 hover:scale-95 hover:shadow-2xl">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105" 
        style={{ height: '240px' }} // Fixed height
      />
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 truncate">{title}</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-4 flex-1 overflow-hidden text-ellipsis">{description}</p>
        <p className="text-xs sm:text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default HealthBlogCard;
