import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DepartmentCard from '../../../Components/Department-Component/DepartmentCard';
import Image from '../../../assets/Images/care3.jpg';
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
const InternalMedicine: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <h1 className="text-3xl font-bold mt-6 text-purple-900 ml-20">Internal Medicine</h1>
      <div className="flex flex-col md:flex-row mt-4">
        {/* Left Side - Department Card */}
        <div className="hidden lg:block w-full lg:w-1/3 p-4 lg:ml-12">
          <div className="overflow-x-auto">
            <DepartmentCard departments={departments} />
          </div>
        </div>
        {/* Right Side - Internal Medicine Content */}
        <div className="w-full md:w-2/3 p-6 bg-white text-gray-800">
          <div className="flex justify-center mb-6">
            <img
              src={Image}
              alt="Internal Medicine Department"
              className="h-auto md:w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-90 rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-900">Internal Medicine</h2>
            <p>
              The Department of Internal Medicine at GBH AH provides comprehensive and personalized medical care for adults, focusing on the prevention, diagnosis, and treatment of a wide range of medical conditions. Our team of skilled internists and healthcare professionals is dedicated to offering holistic care to promote patient well-being and manage chronic conditions effectively.
            </p>
            <h3 className="text-xl font-semibold text-purple-800">Services Offered:</h3>
            <ul className="list-disc ml-5">
              <li>General Medical Consultation and Check-ups</li>
              <li>Diabetes Management and Education</li>
              <li>Hypertension Management</li>
              <li>Cholesterol Management</li>
              <li>Infectious Disease Management</li>
              <li>Geriatric Care</li>
              <li>Preventive Health Screenings and Immunizations</li>
              <li>Thyroid Disorders Management</li>
              <li>Cardiovascular Risk Assessment and Management</li>
              <li>Allergy and Asthma Management</li>
              <li>Gastroenterology Services including Endoscopy</li>
              <li>Rheumatology Services for Joint and Autoimmune Diseases</li>
              <li>Chronic Disease Management (e.g., COPD, Chronic Kidney Disease)</li>
            </ul>
            <h3 className="text-xl font-semibold text-purple-800">Specialized Procedures:</h3>
            <ul className="list-disc ml-5">
              <li>Electrocardiograms (ECG)</li>
              <li>Echocardiography</li>
              <li>Holter Monitoring</li>
              <li>Pulmonary Function Tests (PFTs)</li>
              <li>Endoscopy and Colonoscopy</li>
              <li>Joint Injections for Arthritis and Inflammation</li>
              <li>Diabetic Foot Care and Wound Management</li>
              <li>Intravenous Infusion Therapy</li>
              <li>Ultrasound-Guided Procedures</li>
            </ul>
            <h3 className="text-xl font-semibold text-purple-800">Highlights:</h3>
            <ul className="list-disc ml-5">
              <li>Round-the-clock availability of experienced internists and specialists.</li>
              <li>Collaborative care with multidisciplinary teams for comprehensive management.</li>
              <li>State-of-the-art diagnostic and therapeutic equipment.</li>
              <li>Emphasis on preventive care and patient education to enhance quality of life.</li>
              <li>Access to advanced diagnostic services including CT, MRI, and Ultrasound.</li>
              <li>Telemedicine consultations available for remote care.</li>
            </ul>
            <p className="mt-4">For more information or to schedule an appointment, please contact our Internal Medicine Department led by Dr. Anjali Mehta, Consultant in Internal Medicine.</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default InternalMedicine;
