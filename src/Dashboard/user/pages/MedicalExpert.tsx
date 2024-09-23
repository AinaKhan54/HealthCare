// src/pages/MedicalExperts.tsx
import React, { useState, ChangeEvent } from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DoctorCard from '../../../Components/CardComponent/DoctorCard';

// Importing local images
import doctorImage1 from "../../../assets/Images/doctor1.jpg";
import doctorImage2 from "../../../assets/Images/doctor2.jpg";
import doctorImage3 from "../../../assets/Images/doctor3.jpg";
import doctorImage4 from "../../../assets/Images/doctor4.jpg";

// Define the type for a doctor object
interface Doctor {
  name: string;
  specialty: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    name: 'Dr. John Doe',
    specialty: 'Darmatologist',
    image: doctorImage1
  },
  {
    name: 'Dr. Jane Smith',
    specialty: 'Neurologist',
    image: doctorImage2
  },
  {
    name: 'Dr. Alice Johnson',
    specialty: 'Orthopedic Surgeon',
    image: doctorImage3
  },
  {
    name: 'Dr. Bob Brown',
    specialty: 'Orthopedic Surgeon',
    image: doctorImage4
  }
  // Add more doctor objects as needed
];

const MedicalExperts: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter doctors based on search query
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <PatientNavbar />
      <div className="p-4">
        <h1 className="text-3xl text-center font-bold text-purple-600 mb-4">
          Select a Doctor
        </h1>
        <p className="mb-4 text-center">
          Our find a doctor tool assists you in choosing.
        </p>
        {/* Search box */}
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Search for a doctor..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded-md shadow-sm w-full max-w-md"
          />
        </div>
        {/* Display filtered doctors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialty={doctor.specialty}
              image={doctor.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalExperts;
