import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DepartmentCard from '../../../Components/Department-Component/DepartmentCard';
import Image from '../../../assets/Images/icu.jpg';
import DoctorImage from "../../../assets/Images/doctor3.jpg";
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

const IntensiveCareUnit: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <h1 className="text-3xl font-bold mt-6 text-purple-900 ml-20">Intensive Care Unit (ICU)</h1>
      <div className="flex flex-col md:flex-row mt-4">
        {/* Left Side - Department Card */}
        <div className="hidden lg:block w-full lg:w-1/3 p-4 lg:ml-12">
          <div className="overflow-x-auto">
            <DepartmentCard departments={departments} />
          </div>
        </div>

        {/* Right Side - Intensive Care Unit Content */}
        <div className="w-full md:w-2/3 p-6 bg-white text-gray-800">
          <div className="flex justify-center mb-6">
            <img
              src={Image}
              alt="Intensive Care Unit"
              className="h-auto md:w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-90 rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-900">Intensive Care Unit</h2>
            <p>
              The Intensive Care Unit (ICU) at GBH AH provides specialized care for critically ill patients who require constant monitoring and advanced medical intervention. Our ICU is equipped with the latest technology and staffed by a team of highly trained healthcare professionals, including intensivists, nurses, respiratory therapists, and other specialists.
            </p>
            <h3 className="text-xl font-semibold text-purple-800">Facilities and Services:</h3>
            <ul className="list-disc ml-5">
              <li>24/7 monitoring with state-of-the-art equipment, including multiparameter monitors for continuous observation of vital signs.</li>
              <li>Advanced mechanical ventilators with various modes to support patients with respiratory failure.</li>
              <li>Hemodynamic monitoring for managing critically ill patients with complex conditions.</li>
              <li>Comprehensive support for patients undergoing surgeries, organ transplants, or recovering from severe trauma.</li>
              <li>Specialized units for Cardiac ICU, Neuro ICU, Medical ICU, and Surgical ICU to provide targeted care for specific needs.</li>
              <li>Continuous renal replacement therapy (CRRT) for patients with renal failure.</li>
              <li>Bedside imaging facilities, including portable X-ray, ultrasound, and ECHO.</li>
              <li>Invasive procedures such as central line placement, arterial line insertion, and endotracheal intubation.</li>
            </ul>
            <h3 className="text-xl font-semibold text-purple-800">Specialized Procedures:</h3>
            <ul className="list-disc ml-5">
              <li>Advanced airway management, including tracheostomy and bronchoscopy.</li>
              <li>Extracorporeal membrane oxygenation (ECMO) for severe respiratory or cardiac failure.</li>
              <li>Continuous EEG monitoring for patients with neurological emergencies.</li>
              <li>Advanced wound care, including negative pressure wound therapy (NPWT).</li>
              <li>Critical care ultrasonography for diagnosis and monitoring.</li>
              <li>Therapeutic hypothermia for patients post-cardiac arrest.</li>
            </ul>
            <h3 className="text-xl font-semibold text-purple-800">Highlights:</h3>
            <ul className="list-disc ml-5">
              <li>Round-the-clock availability of intensivists and specialized critical care teams.</li>
              <li>Comprehensive infection control measures to prevent healthcare-associated infections.</li>
              <li>Dedicated isolation rooms for managing patients with highly infectious diseases.</li>
              <li>Interdisciplinary team approach for holistic patient management.</li>
              <li>Family-centered care with emphasis on communication and support for patient families.</li>
            </ul>
            <div className='bg-purple-200 rounded-lg shadow-md p-4 w-64 mt-10 h-72'>
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={DoctorImage}
                  alt="Dr. Tarun Bhatnagar"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold mt-8">Dr. Tarun Bhatnagar</h4>
              <p>Sr. Consultant & HOD - Anaesthesia</p>
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

export default IntensiveCareUnit;
