import React from 'react';
import { useNavigate } from 'react-router-dom';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import Footer from '../../../layout/userLayout/footer';
import Image from "../../../assets/Images/pic2.png"; 
import DocImage from "../../../assets/Images/pic5.png";
import "../../../..//src/animation.css";
import { FaArrowRight } from 'react-icons/fa';
import Img1 from "../../../assets/Images/Img1.png";
import Img2 from "../../../assets/Images/Img2.png"; 
import Img3 from "../../../assets/Images/Img3.png"; 
import Img4 from "../../../assets/Images/Img4.png"; 

const PatientDashboard: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (route: string) => {
        navigate(route);
    };

    return (
        <div className="p-0">
            <PatientNavbar />
            
            {/* Main Image and Text */}
            <div className="relative p-2">
                {/* Main Image */}
                <img
                    src={Image}
                    alt="Patient Dashboard"
                    className="w-full h-[200px] md:h-[400px] lg:h-[600px] rounded-lg object-cover"
                />
                    {/* Text Line */}
                    <div className="absolute top-1/3 right-2 md:right-6 transform -translate-y-1/2 p-1 md:p-2 animate-slide-in text-center md:text-left hidden md:block">
                        <h6 className="text-sm md:text-xl lg:text-3xl text-purple-900 font-semibold">
                            We Provide Medical Services <br /> That You Can Trust!
                        </h6>
                        <p className="text-xs md:text-sm lg:text-base text-gray-700 font-medium mt-2">
                            Experience personalized care from our dedicated team of medical professionals.
                        </p>
                        <p className="text-xs md:text-sm lg:text-base text-gray-700 font-medium">
                            Book your appointment now and let us help you achieve optimal health.
                        </p>
                    </div>

            </div>

            {/* DocImage and Text Content */}
            <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-center">
                {/* New Image */}
                <img
                   src={DocImage}
                   alt="Additional Content"
                   className="hidden md:block w-full md:w-56 md:h-56 object-cover ml-0 md:ml-44"
                />
                {/* Text Content and Request Appointment Card */}
                <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-center items-center w-full">
                    {/* Text Content */}
                    <div className="md:ml-2 max-w-md flex-grow text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-semibold text-purple-900 mb-3">
                            Welcome to MediCare Hospital
                        </h2>
                        <p className="text-gray-900 font-medium text-sm md:text-base">
                            The vision of MediCare Hospital has always been clear: to provide the highest quality treatment to its patients at an affordable cost. Our state-of-the-art facility and dedicated team of healthcare professionals are committed to providing you with exceptional medical care.
                        </p>
                    </div>

                    {/* Request an Appointment Card */}
                    <div className="w-full md:w-72 p-4 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col justify-between mt-4 md:mt-0 md:ml-20">
                        <h3
                            className="flex items-center justify-between p-1 bg-purple-100 rounded hover:bg-purple-300 transition-colors duration-200 cursor-pointer"
                            onClick={() => handleNavigation('/make-appointment')}
                        >
                            Request an Appointment
                            <FaArrowRight className="text-purple-500 ml-1" />
                        </h3>
                        <h3
                            className="flex items-center justify-between p-1 bg-purple-100 rounded hover:bg-purple-300 transition-colors duration-200 cursor-pointer mt-4"
                            onClick={() => handleNavigation('/medical-expert')}
                        >
                            Find Doctor
                            <FaArrowRight className="text-purple-500 ml-1" />
                        </h3>
                        <h3
                            className="flex items-center justify-between p-1 bg-purple-100 rounded hover:bg-purple-300 transition-colors duration-200 cursor-pointer mt-4"
                            onClick={() => handleNavigation('/ContactUs')}
                        >
                            Contact Us
                            <FaArrowRight className="text-purple-500 ml-1" />
                        </h3>
                        <h3
                            className="flex items-center justify-between p-1 bg-purple-100 rounded hover:bg-purple-300 transition-colors duration-200 cursor-pointer mt-4"
                            onClick={() => handleNavigation('/health-blog')}
                        >
                            Health Blog
                            <FaArrowRight className="text-purple-500 ml-1" />
                        </h3>
                    </div>
                </div>
            </div>

            {/* Departments Heading */}
            <div className="mt-8 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-purple-900 mb-6">
                    Our Departments
                </h2>
            </div>

            {/* Departments Blocks */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-2 md:mx-6">
                {/* Block 1 */}
                <div className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col justify-center items-center mb-8">
                    <img 
                        src={Img1} 
                        alt="Pathology"
                        className="w-20 h-20 mb-2 rounded-lg"
                    />
                    <h1 className="text-base md:text-lg font-semibold mb-2">Pathology</h1>
                    <button
                        className="bg-purple-500 text-white font-bold py-1 px-3 rounded-lg transition-transform duration-300 hover:scale-105"
                        onClick={() => handleNavigation('/pathology')}
                    >
                        Read More 
                    </button>
                </div>
                {/* Block 2 */}
                <div className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col justify-center items-center mb-8">
                    <img 
                        src={Img2} 
                        alt="Dermatology"
                        className="w-20 h-20 mb-2 rounded-lg"
                    />
                    <h1 className="text-base md:text-lg font-semibold mb-2">Dermatology</h1>
                    <button
                        className="bg-purple-500 text-white font-bold py-1 px-3 rounded-lg transition-transform duration-300 hover:scale-105"
                        onClick={() => handleNavigation('/dermatology')}
                    >
                        Read More
                    </button>
                </div>
                {/* Block 3 */}
                <div className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col justify-center items-center mb-8">
                    <img 
                        src={Img3} 
                        alt="Pharmacy"
                        className="w-20 h-20 mb-2 rounded-lg"
                    />
                    <h1 className="text-base md:text-lg font-semibold mb-2">Pharmacy</h1>
                    <button
                        className="bg-purple-500 text-white font-bold py-1 px-3 rounded-lg transition-transform duration-300 hover:scale-105"
                        onClick={() => handleNavigation('/pharmacy')}
                    >
                        Read More
                    </button>
                </div>
                {/* Block 4 */}
                <div className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col justify-center items-center mb-8">
                    <img 
                        src={Img4} 
                        alt="Radiology"
                        className="w-20 h-20 mb-2 rounded-lg"
                    />
                    <h1 className="text-base md:text-lg font-semibold mb-2">Radiology</h1>
                    <button
                        className="bg-purple-500 text-white font-bold py-1 px-3 rounded-lg transition-transform duration-300 hover:scale-105"
                        onClick={() => handleNavigation('/radiology')}
                    >
                        Read More
                    </button>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default PatientDashboard;
