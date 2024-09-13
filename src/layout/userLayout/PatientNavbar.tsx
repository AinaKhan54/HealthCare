import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Images/logo3.png"
import profileIcon from "../../assets/Images/user1.png"

const PatientNavbar: React.FC = () => {
  const [patientsDropdownOpen, setPatientsDropdownOpen] = useState(false);
  const [departmentDropdownOpen, setDepartmentDropdownOpen] = useState(false);

  // Replace this with actual user data as needed
  const userName: string = "John Doe";

  return (
    <nav className="bg-[#e6e6fa] py-3 px-7">
      <div className='container mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center'>
          <img src={logo} alt='logo' className='w-30 h-12' />
        </div>
        
        {/* Navigation Links */}
        <div className="relative flex items-center space-x-6">
          {/* For Patients Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPatientsDropdownOpen(true)}
            onMouseLeave={() => setPatientsDropdownOpen(false)}
          >
            <Link
              to="/"
              className="text-purple-800 text-lg px-4 py-2 rounded-md hover:bg-purple-800 hover:text-white transition duration-300"
            >
              For Patients
            </Link>
            {patientsDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <Link
                  to="/MakeAppointment"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >
                  Make Appointment
                </Link>
                <Link
                  to="/HealthBlog"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >
                  Health Blog
                </Link>
                <Link
                  to="/patient-guide"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >
                  Patient Guide
                </Link>
              </div>
            )}
          </div>
          
          {/* Department Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDepartmentDropdownOpen(true)}
            onMouseLeave={() => setDepartmentDropdownOpen(false)}
          >
            <Link
              to="/department"
              className="text-purple-800 text-lg px-4 py-2 rounded-md hover:bg-purple-800 hover:text-white transition duration-300"
            >
              Department
            </Link>
            {departmentDropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <Link
                  to="/accident-emergency"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >
                  Accident & Emergency
                </Link>
                <Link
                  to="/general-medicine"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >
                  General Medicine
                </Link>
                <Link
                  to="/intensive-care-unit"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >
                  Intensive Care Unit
                </Link>
                <Link
                  to="/surgical-department"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >
                  Surgical Department
                </Link>
                <Link
                  to="/internal-medicine"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >
                  Internal Medicine
                </Link>
                <Link
                  to="/pediatries"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >
                Pediatries
                </Link>
                <Link
                  to="/obstetrics-gynecology"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >
                  Obstetrics & Gynecology
                </Link>
                <Link
                  to="/radiology"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >
                  Radiology
                </Link>
                <Link
                  to="/pathology"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >
                  Pathology
                </Link>
                <Link
                  to="/pharmacy"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >
                  Pharmacy
                </Link>
                <Link
                  to="/critical-care&anesthesiology"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >Critical Care & Anesthesiology
                  
                </Link>
                <Link
                  to="/dermatology" 
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                >
                  Dermatology
                </Link>
                
              </div>
            )}
          </div>
          
          <Link
            to="/Patient/MedicalExpert"
            className="text-purple-800 text-lg px-4 py-2 rounded-md hover:bg-purple-800 hover:text-white transition duration-300"
          >
            Medical Experts
          </Link>
          <Link
            to="/About"
            className="text-purple-800 text-lg px-4 py-2 rounded-md hover:bg-purple-800 hover:text-white transition duration-300"
          >
            About
          </Link>
          <Link
            to="/Patient/ContactUs"
            className="text-purple-800 text-lg px-4 py-2 rounded-md hover:bg-purple-800 hover:text-white transition duration-300"
          >
            Contact Us
          </Link>
        </div>
        
        {/* User Profile */}
        <div className="flex items-center">
          <div className="flex items-center space-x-3">
            <span className="text-purple-800 text-lg font-medium">{userName}</span>
            <img
              src={profileIcon}
              alt='user profile'
              className='w-10 h-10 rounded-full border-2 border-purple-800 cursor-pointer hover:border-purple-600 transition duration-300'
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PatientNavbar;
