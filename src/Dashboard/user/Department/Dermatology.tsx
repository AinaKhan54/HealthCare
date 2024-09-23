import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DepartmentCard from '../../../Components/Department-Component/DepartmentCard';
import Image from "../../../assets/Images/dermatology.jpg";

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

const Dermatology: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <h1 className="text-3xl font-bold mt-6 text-purple-900 ml-20">Dermatology</h1>
      <div className="flex flex-col md:flex-row mt-4">
        {/* Left Side - Department Card */}
        <div className="w-full md:w-1/3 p-4 hidden md:block">
          <DepartmentCard departments={departments} />
        </div>

        {/* Right Side - Dermatology Content */}
        <div className="w-full md:w-2/3 p-6 bg-white text-gray-800">
          <div className="flex justify-center mb-6">
            <img
              src={Image}
              alt="Dermatology Department"
              className="h-auto md:w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-95 rounded-lg"
            />
          </div>

          {/* Content for Dermatology */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Dermatology</h2>
            <p>
              Dermatology is one of the best facilities of its kind in the region, providing comprehensive clinical and cosmetic dermatology care...
            </p>
            <p className="mt-4">
              We treat common skin conditions like eczema, psoriasis, vitiligo, leprosy, urticaria...
            </p>

            {/* Services Offered */}
            <h3 className="text-xl font-semibold mt-6">Services Offered:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>General Dermatology</li>
              <li>Surgical Dermatology</li>
              <li>Pediatric Dermatology</li>
              <li>Dermatopathology</li>
              <li>Light Therapy</li>
              <li>Cosmetic Dermatology</li>
            </ul>

            {/* Specialized Procedures */}
            <h3 className="text-xl font-semibold mt-6">Specialized Procedures:</h3>
            <p className="mt-2">
              Apart from our daily out-patient services, the department also carries out diagnostic and cosmetic procedures...
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Treatment of acne scars by derma roller, punch elevation...</li>
              <li>Skin biopsies.</li>
              <li>Radiofrequency ablation for removal of skin tags...</li>
              <li>Chemical peels for pigmentation and scars.</li>
              <li>Vaginal swabs.</li>
              <li>Intralesional injections for keloids...</li>
              <li>Nail Splinting for ingrowing toenail.</li>
              <li>Botox injections for excessive sweating of palms and soles.</li>
            </ul>

            {/* Highlights */}
            <h3 className="text-xl font-semibold mt-6">Highlights:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Treatment of vitiligo with NBUVB (Ultraviolet therapy).</li>
              <li>Surgical treatment of vitiligo by punch grafting...</li>
              <li>Our dermatologists have successfully treated patients over the years.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dermatology;
