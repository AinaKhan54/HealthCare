import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DepartmentCard from '../../../Components/Department-Component/DepartmentCard';
import Image from "../../../assets/Images/Paediatric.jpg";
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

const Pediatries: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <h1 className="text-3xl font-bold mt-6 text-purple-900 ml-20">Pediatrics</h1>
      <div className="flex flex-col md:flex-row mt-4">
        {/* Left Side - Department Card */}
        <div className="hidden lg:block w-full lg:w-1/3 p-4 lg:ml-12">
          <div className="overflow-x-auto">
            <DepartmentCard departments={departments} />
          </div>
        </div>

        {/* Right Side - Pediatrics Content */}
        <div className="w-full md:w-2/3 p-6 bg-white text-gray-800">
          <div className="flex justify-center mb-6">
            <img
              src={Image}
              alt="Pediatrics Department"
              className="h-auto md:w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-90 rounded-lg"
            />
          </div>

          {/* Content for Pediatrics */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Pediatrics</h2>
            <p>
              The Department of Pediatric and Neonatology offers state-of-the-art patient care in various pediatric specialties right from birth to adolescence. It combines the latest health facilities, utmost hygiene standards, and eminent experts with years of experience and expertise. The best feature is their warm and pleasant behavior, a key factor in treating children.
            </p>
            <p>
              We have a Neonatal Intensive Care Unit with advanced equipment, including high-frequency ventilators, catering to premature babies with special needs and those born after high-risk pregnancies, such as following in vitro fertilization. The unit provides pre- and post-operative management of neonatal emergencies.
            </p>
            <p>
              At GBH AH, we take good care of preterm and very low birth weight babies, who have many problems including respiratory difficulty, feeding intolerance, infection, and increased chances of bleeding. The unit has incubators with in-built temperature control and an oxygen delivery system. We also have mechanical ventilation facilities, including high-frequency ventilation, to support babies with breathing difficulties. Additionally, the department offers a wide range of vaccinations, not only for children but also for adults and travelers.
            </p>

            {/* Services Offered */}
            <h3 className="text-xl font-semibold mt-6">Services Offered:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Well baby clinic</li>
              <li>Immunization clinic</li>
              <li>High-risk clinic</li>
              <li>New-born clinic</li>
              <li>Low birth weight baby management</li>
              <li>Preterm baby care</li>
              <li>Pediatric Neurology Clinic</li>
              <li>Outpatient and Inpatient services</li>
              <li>Neonatal Intensive Care Unit (NICU)</li>
              <li>Pediatric Intensive Care Unit (PICU)</li>
              <li>Height and Weight Management</li>
              <li>Brain fever and Jaundice management</li>
              <li>Asthma management</li>
              <li>Convulsion management</li>
              <li>Vaccinations</li>
              <li>Pediatric urology with endoscopy and reconstructive surgery</li>
              <li>Upper G.I. endoscopy for children</li>
              <li>Bronchoscopy for children</li>
              <li>Laparoscopy and Laparoscopic surgery for children</li>
            </ul>

            {/* Specialized Procedures */}
            <h3 className="text-xl font-semibold mt-6">Specialized Procedures:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Pediatric Ventilator</li>
              <li>Continuous Positive Airway Pressure (CPAP)</li>
              <li>Surfactant administration</li>
              <li>Exchange Transfusion</li>
              <li>Nebulization</li>
              <li>Infusion Pump</li>
              <li>Cerebro-Spinal Fluid (CSF) exams</li>
              <li>Bone Marrow Examination</li>
            </ul>

            {/* Highlights */}
            <h3 className="text-xl font-semibold mt-6">Highlights:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>The hospital offers Pediatric ECHO, USG, CT, and MRI services all under one roof for patient convenience</li>
              <li>All types of vaccines are available in the hospital</li>
              <li>Facility of Central line administration in children is also available</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Pediatries;
