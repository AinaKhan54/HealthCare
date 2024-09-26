// src/pages/MedicalExperts.tsx
import React, { useState, ChangeEvent } from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DoctorCard from '../../../Components/CardComponent/DoctorCard';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Footer from '../../../layout/userLayout/footer';

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
  path: string; // Add path property
}

const doctors: Doctor[] = [
  {
    name: 'Dr. John Doe',
    specialty: 'Anesthesiology',
    image: doctorImage1,
    path: '/doctor/anesthesiology' // Define path for navigation
  },
  {
    name: 'Dr. Emily Johnson',
    specialty: 'Dermatology',
    image: doctorImage2,
    path: '/doctor/dermatology' // Define path for navigation
  },
  {
    name: 'Dr. Michael Brown',
    specialty: 'Radiology',
    image: doctorImage3,
    path: '/doctor/radiology' // Define path for navigation
  },
  {
    name: 'Dr. Sarah Wilson',
    specialty: 'Gynecology',
    image: doctorImage4,
    path: "/doctor/obstetrics-gynecology" 
  }
];

const MedicalExperts: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Filter doctors based on search query
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCardClick = (path: string) => {
    navigate(path); // Navigate to the specified path
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
            <div key={index} onClick={() => handleCardClick(doctor.path)}> {/* Handle click on card */}
              <DoctorCard
                name={doctor.name}
                specialty={doctor.specialty}
                image={doctor.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MedicalExperts;
