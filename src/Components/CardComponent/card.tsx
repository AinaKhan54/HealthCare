import React from 'react';

// Define the props type
interface CardProps {
  title: string;
  content: string | number;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 lg:p-10 mx-4 sm:mx-6 md:mx-8 lg:mx-10 my-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4">{title}</h2>
      <p className="text-sm sm:text-base md:text-lg">{content}</p>
    </div>
  );
};

export default Card;
