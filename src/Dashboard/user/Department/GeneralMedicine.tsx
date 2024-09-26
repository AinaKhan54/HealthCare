import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DepartmentCard from '../../../Components/Department-Component/DepartmentCard';
import Image from "../../../assets/Images/doctor-hand.jpg";
import DoctorImage from "../../../assets/Images/doctor2.jpg";
import Footer from '../../../layout/userLayout/footer';

const departments = [
  { name: 'Accident & Emergency', link: '/accident-emergency' },
  { name: 'General Medicine', link: '/general-medicine' },
  { name: 'Intensive Care Unit', link: '/intensive-care-unit' },
  { name: 'Surgical Department', link: '/surgical-department' },
  { name: 'Internal Medicine', link: '/internal-medicine' },
  { name: 'Pediatrics', link: '/internal-medicine' },
  { name: 'Obstetrics & Gynecology', link: '/obstetrics-gynecology' },
  { name: 'Radiology', link: '/radiology' },
  { name: 'Pathology', link: '/pathology' },
  { name: 'Pharmacy', link: '/pharmacy' },
  { name: 'Anesthesiology', link: '/critical-care&anesthesiology' },
  { name: 'Dermatology', link: '/dermatology' },
];

const GeneralMedicine: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <h1 className="text-3xl font-bold mt-6 text-purple-900 ml-20">General Medicine</h1>
      <div className="flex flex-col md:flex-row mt-4">
        {/* Left Side - Department Card */}
        <div className="hidden lg:block w-full lg:w-1/3 p-4 lg:ml-12">
          <div className="overflow-x-auto">
            <DepartmentCard departments={departments} />
          </div>
        </div>

        {/* Right Side - General Content */}
        <div className="w-full md:w-2/3 p-6 bg-white text-gray-800">
          <div className="flex justify-center mb-6 max-h-46 max-w-54">
            <img
              src={Image}
              alt="General Medicine"
              className="h-auto md:w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-90 rounded-lg"
            />
          </div>

          {/* Content for General Medicine */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">General Medicine</h2>
            <p>
              The Department of Internal Medicine provides a broad range of services for diagnosis and treatment of multiple medical problems by our professionally qualified senior consultants. Management of acute and chronic diseases involving multi-system is provided in the Department, where coordination between different specialists and holistic care of a patient are very much desired. Infectious diseases are a major problem in our part of the world, including Malaria, Typhoid fever, Tuberculosis, HIV, Dengue fever, H1N1, etc. Most of these diseases present with fever and general symptoms, which are investigated in depth and treated by our doctors. Sometimes these diseases present as Septicemia & shock, managed in the state-of-the-art medical ICU.
            </p>

            <h3 className="text-xl font-semibold mt-6">Services Offered:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Advanced management of fever</li>
              <li>Intensive care management</li>
              <li>Asthma and other respiratory diseases care</li>
              <li>Snake bite and poisoning</li>
              <li>Management of all types of environmental diseases</li>
              <li>Routine Health-Checkups</li>
              <li>Diabetes management</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Specialized Procedures:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Pleural, Peritoneal, and Ascitic fluid aspiration</li>
              <li>Management of environmental diseases, including diseases due to industrial chemical exposure, drowning, electrical injuries, radiation injuries, snake bite, dog bite, and insect or scorpion bite</li>
              <li>Blood Pressure test and all problems related to blood pressure are treated</li>
              <li>Other emergency services</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Highlights:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Well-equipped with centralized A/C Medical Intensive Care Unit including ventilators, monitors, and other excellent facilities to provide the best care</li>
              <li>Elaborate diagnostic facilities aided by modern laboratory and imaging techniques</li>
              <li>Executive health-checkups (comprehensive assessment of health risk, preventive, and promotive health care)</li>
            </ul>
            <div className='bg-purple-200 rounded-lg shadow-md p-4 w-64 mt-10 h-72'>
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={DoctorImage} // Replace with the actual path to your image
                  alt="Dr. Preeti Bhatnagar"
                  className="w-32 h-32 rounded-full object-cover" // Adjust size as needed
                />
              </div>
              <h4 className="text-lg font-semibold mt-8">Dr. Preeti Bhatnagar</h4>
              <p>Consultant Adult & Pediatric Endocrinologist</p>
            </div>
            <button className="mt-4 px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default GeneralMedicine;
