import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DepartmentCard from '../../../Components/Department-Component/DepartmentCard';
import Image from '../../../assets/Images/pathology.jpg';
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

const Pathology: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <h1 className="text-3xl font-bold mt-6 text-purple-900 ml-20">Pathology</h1>
      <div className="flex flex-col md:flex-row mt-4">
        {/* Left Side - Department Card */}
        <div className="hidden lg:block w-full lg:w-1/3 p-4 lg:ml-12">
          <div className="overflow-x-auto">
            <DepartmentCard departments={departments} />
          </div>
        </div>

        {/* Right Side - Pathology Content */}
        <div className="w-full md:w-2/3 p-6 bg-white text-gray-800">
          <div className="flex justify-center mb-6">
            <img
              src={Image}
              alt="Pathology Department"
              className="h-auto md:w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-90 rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-900">Pathology</h2>
            <p>
              The Department of Pathology at GBH AH provides comprehensive diagnostic services for a wide range of diseases and medical conditions. Our state-of-the-art laboratory is equipped with the latest technology and staffed by experienced pathologists and laboratory professionals who ensure accurate and timely results. We offer a wide array of diagnostic tests, from routine blood tests to complex molecular and genetic studies.
            </p>
            <h3 className="text-xl font-semibold text-purple-800">Services Offered:</h3>
            <ul className="list-disc ml-5">
              <li>Hematology and Coagulation Studies</li>
              <li>Clinical Biochemistry</li>
              <li>Microbiology and Serology</li>
              <li>Cytology and Pap Smear Testing</li>
              <li>Histopathology and Biopsy Examination</li>
              <li>Immunohistochemistry (IHC)</li>
              <li>Molecular Pathology and Genetic Testing</li>
              <li>Autoimmune Disease Testing</li>
              <li>Infectious Disease Testing</li>
              <li>Allergy Testing</li>
              <li>Pre- and Post-operative Surgical Pathology Consultations</li>
              <li>Blood Banking and Transfusion Services</li>
            </ul>
            <h3 className="text-xl font-semibold text-purple-800">Specialized Procedures:</h3>
            <ul className="list-disc ml-5">
              <li>Frozen Section for Rapid Diagnosis during Surgery</li>
              <li>Flow Cytometry for Hematological Malignancies</li>
              <li>Molecular Diagnostic Techniques (PCR, FISH, etc.)</li>
              <li>Bone Marrow Aspiration and Biopsy</li>
              <li>Fine Needle Aspiration Cytology (FNAC)</li>
              <li>Advanced Hormone and Tumor Marker Testing</li>
              <li>Genetic and Chromosomal Analysis</li>
              <li>Renal and Liver Biopsy Analysis</li>
            </ul>
            <h3 className="text-xl font-semibold text-purple-800">Highlights:</h3>
            <ul className="list-disc ml-5">
              <li>24/7 Laboratory Services Available for Emergency Cases</li>
              <li>State-of-the-art Laboratory Equipment Ensures High Accuracy</li>
              <li>Strict Quality Control Protocols Followed for All Tests</li>
              <li>Fast Turnaround Time for All Routine and Specialized Tests</li>
              <li>Telepathology Services for Remote Consultations</li>
              <li>Experienced Team of Pathologists with Sub-specialization in Various Fields</li>
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

export default Pathology;
