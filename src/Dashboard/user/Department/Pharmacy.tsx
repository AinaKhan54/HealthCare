import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DepartmentCard from '../../../Components/Department-Component/DepartmentCard';
import Image from '../../../assets/Images/pharmacy.jpg';

const departments = [
  'Accident & Emergency',
  'General Medicine',
  'Intensive Care Unit',
  'Surgical Department',
  'Internal Medicine',
  'Pediatrics',
  'Obstetrics & Gynecology',
  'Radiology',
  'Pathology',
  'Pharmacy',
  'Anesthesiology',
  'Dermatology'
];

const Pharmacy: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <h1 className="text-3xl font-bold mt-6 text-purple-900 ml-20">Pharmacy</h1>
      <div className="flex mt-4">
        {/* Left Side - Department Card */}
        <div className="w-1/3 p-4 ml-12">
          <DepartmentCard departments={departments} />
        </div>

        {/* Right Side - Pharmacy Content */}
        <div className="w-2/3 p-6 bg-white text-gray-800">
          <div className="flex justify-center mb-6">
            <img
              src={Image}
              alt="Pharmacy Department"
              className="h-auto md:w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-90 rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-900">Pharmacy</h2>
            <p>
              The Pharmacy Department at GBH AH is dedicated to providing high-quality pharmaceutical care to all patients. Our state-of-the-art pharmacy is equipped with the latest technologies and staffed by highly trained pharmacists and technicians who ensure accurate dispensing of medications and provide personalized counseling. We maintain a wide range of medications and pharmaceutical supplies to meet the diverse needs of our patients.
            </p>
            <h3 className="text-xl font-semibold text-purple-800">Services Offered:</h3>
            <ul className="list-disc ml-5">
              <li>24/7 Pharmacy Services</li>
              <li>Medication Dispensing and Counseling</li>
              <li>Medication Therapy Management</li>
              <li>Drug Interaction Checks</li>
              <li>Inpatient and Outpatient Pharmacy Services</li>
              <li>Customized Medication Compounding</li>
              <li>Home Delivery of Medications</li>
              <li>Patient Education on Medication Use</li>
              <li>Over-the-counter Medication Guidance</li>
              <li>Immunization Services</li>
            </ul>
            <h3 className="text-xl font-semibold text-purple-800">Specialized Procedures:</h3>
            <ul className="list-disc ml-5">
              <li>Pharmacovigilance and Drug Safety Monitoring</li>
              <li>Clinical Pharmacy Services for Inpatients</li>
              <li>Management of High-risk Medications</li>
              <li>Specialized Pediatric and Geriatric Pharmacy Services</li>
              <li>Anticoagulation and Diabetic Management Services</li>
              <li>Support for Patients with Chronic Conditions</li>
              <li>Medication Reconciliation for All Admissions and Discharges</li>
            </ul>
            <h3 className="text-xl font-semibold text-purple-800">Highlights:</h3>
            <ul className="list-disc ml-5">
              <li>Availability of Rare and Specialty Medications</li>
              <li>Automated Systems for Accurate Dispensing</li>
              <li>Strict Quality Control and Storage Protocols</li>
              <li>Personalized Counseling by Certified Pharmacists</li>
              <li>Integration with Electronic Medical Records for Safe Prescribing</li>
              <li>Pharmacy Services Aligned with the Latest Healthcare Standards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
