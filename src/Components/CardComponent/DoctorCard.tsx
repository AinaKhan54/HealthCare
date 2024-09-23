import React from 'react';

// Define the props type
interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, specialty, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col items-center mx-4 sm:mx-6 md:mx-8 mb-6 max-w-xs sm:max-w-sm md:max-w-md">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover mb-3"
      />
      <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-center">{name}</h2>
      <p className="text-gray-600 font-semibold text-xs sm:text-sm md:text-base text-center">{specialty}</p>
    </div>
  );
};

export default DoctorCard;
