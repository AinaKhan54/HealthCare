import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Images/logo3.png";

const PatientNavbar: React.FC = () => {
    const [patientsDropdownOpen, setPatientsDropdownOpen] = useState(false);
    const [departmentDropdownOpen, setDepartmentDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State for the hamburger menu

    const patientsDropdownRef = useRef<HTMLDivElement>(null);
    const departmentDropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (patientsDropdownRef.current && !patientsDropdownRef.current.contains(event.target as Node)) {
            setPatientsDropdownOpen(false);
        }
        if (departmentDropdownRef.current && !departmentDropdownRef.current.contains(event.target as Node)) {
            setDepartmentDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="sticky top-0 bg-[#e6e6fa] py-2 px-4 lg:px-6 z-50 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/home" className="flex items-center">
                        <img src={logo} alt="logo" className="w-[200px] h-[20px] sm:w-30 sm:h-14" />
                    </Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="lg:hidden flex items-center ml-[150px]">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-purple-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={`lg:flex lg:items-center lg:space-x-6 ${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:static top-12 left-0 right-0 bg-[#e6e6fa] lg:bg-transparent lg:w-auto z-40`}>
                    {/* For Patients Dropdown */}
                    <div
                        className="relative lg:inline-block"
                        ref={patientsDropdownRef}
                    >
                        <button
                            onClick={() => setPatientsDropdownOpen(prev => !prev)}
                            className="block lg:inline-block text-purple-800 text-lg px-4 py-2 rounded-md hover:bg-purple-800 hover:text-white transition duration-300"
                        >
                            For Patients
                        </button>
                        {patientsDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                <Link
                                    to="/make-appointment"
                                    className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                                >
                                    Make Appointment
                                </Link>
                                <Link
                                    to="/health-blog"
                                    className="block px-4 py-2 text-purple-800 hover:bg-purple-300 transition duration-300"
                                >
                                    Health Blog
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Department Dropdown */}
                    <div
                        className="relative lg:inline-block"
                        ref={departmentDropdownRef}
                    >
                        <button
                            onClick={() => setDepartmentDropdownOpen(prev => !prev)}
                            className="block lg:inline-block text-purple-800 text-lg px-4 py-2 rounded-md hover:bg-purple-800 hover:text-white transition duration-300"
                        >
                            Department
                        </button>
                        {departmentDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-full sm:w-72 bg-white border border-gray-200 rounded-md shadow-lg z-50">
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
                                >
                                    Critical Care & Anesthesiology
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
                        to="/medical-expert"
                        className="block lg:inline-block text-purple-800 text-lg px-4 py-2 rounded-md hover:bg-purple-800 hover:text-white transition duration-300"
                    >
                        Medical Experts
                    </Link>
                    <Link
                        to="/about"
                        className="block lg:inline-block text-purple-800 text-lg px-4 py-2 rounded-md hover:bg-purple-800 hover:text-white transition duration-300"
                    >
                        About
                    </Link>
                    <Link
                        to="/ContactUs"
                        className="block lg:inline-block text-purple-800 text-lg px-4 py-2 rounded-md hover:bg-purple-800 hover:text-white transition duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
                {/* Glowing Button (Visible only on larger screens) */}
                <div className="ml-4">
                    <Link to="/make-appointment" className="hidden lg:inline-block relative px-6 py-2 text-white bg-purple-600 rounded-md mr-[100px]">
                        <span className="relative">Book an Appointment</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default PatientNavbar;
