import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DepartmentCard from '../../../Components/Department-Component/DepartmentCard';
import Image from '../../../assets/Images/radiology.jpg';
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

const Radiology: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <h1 className="text-3xl font-bold mt-6 text-purple-900 ml-20">Radiology</h1>
      <div className="flex flex-col md:flex-row mt-4">
        {/* Left Side - Department Card */}
        <div className="hidden lg:block w-full lg:w-1/3 p-4 lg:ml-12">
          <div className="overflow-x-auto">
            <DepartmentCard departments={departments} />
          </div>
        </div>

        {/* Right Side - Radiology Content */}
        <div className="w-full md:w-2/3 p-6 bg-white text-gray-800">
          <div className="flex justify-center mb-6">
            <img
              src={Image}
              alt="Radiology Department"
              className="h-auto md:w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-90 rounded-lg"
            />
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Radiology</h2>
            <p>
              Radiology at GBH American Hospital is a leading multispecialty department of Udaipur, offering the complete spectrum of diagnostic and interventional services. The department is a renowned center for highly complex interventional work. The entire team of consultants has extensive experience and training. The radiology department works closely with the referral physician and surgeon as part of the multidisciplinary treatment of various diseases.
            </p>

            {/* Services Offered */}
            <h3 className="text-xl font-semibold mt-6">Services Offered:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>MRI 1.5T</li>
              <li>Computerized Tomograph / CT Scan</li>
              <li>Ultrasonography 3D / 4D</li>
              <li>Color Doppler</li>
              <li>Digital X-Ray</li>
              <li>Digital Subtraction Angiography (DSA)</li>
              <li>Special Investigations</li>
              <li>Barium Studies</li>
              <li>Intravenous Pyelogram (IVP)</li>
              <li>Micturating Cystourethrogram (MCU)</li>
              <li>Portable X-ray</li>
              <li>Mammography</li>
            </ul>

            {/* Specialized Procedures */}
            <h3 className="text-xl font-semibold mt-6">Specialized Procedures:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Intervention in Radiology</li>
              <li>3D / 4D Ultrasound</li>
              <li>CT Angiography</li>
            </ul>

            {/* Highlights */}
            <h3 className="text-xl font-semibold mt-6">Highlights:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>CT and USG guided biopsy and other procedures</li>
              <li>Neuro Radiology</li>
              <li>Tumor Imaging</li>
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

export default Radiology;
