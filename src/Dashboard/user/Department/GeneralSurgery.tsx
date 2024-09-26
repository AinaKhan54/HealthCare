import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DepartmentCard from '../../../Components/Department-Component/DepartmentCard';
import Image from '../../../assets/Images/surgery.jpg';
import DoctorImage from "../../../assets/Images/doctor4.jpg";
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

const GeneralSurgery: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <h1 className="text-3xl font-bold mt-6 text-purple-900 ml-20">Anesthesiology</h1>
      <div className="flex flex-col md:flex-row mt-4">
        {/* Left Side - Department Card */}
        <div className="hidden lg:block w-full lg:w-1/3 p-4 lg:ml-12">
          <div className="overflow-x-auto">
            <DepartmentCard departments={departments} />
          </div>
        </div>

        {/* Right Side - Anesthesiology Content */}
        <div className="w-full md:w-2/3 p-6 bg-white text-gray-800">
          <div className="flex justify-center mb-6">
            <img
              src={Image}
              alt="Surgical Department"
              className="h-auto md:w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-90 rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-900">Critical Care & Anesthesiology</h2>
            <p>
              The Department of Anaesthesiology and Critical care medicine offers consultation in all areas of anaesthesia and critical care medicine.
            </p>
            <h3 className="text-xl font-semibold text-purple-800">Critical Care Medicine:</h3>
            <p>
              The division of critical care medicine has 44 beds, divided under following units: Medical Intensive Care Unit (MICU), Surgical Intensive Care Unit (SICU), Cardiac ICU, Cardiac step down unit, Neuro Surgical ICU and Stroke Unit. All medical and surgical cases needing intensive care are admitted here.
            </p>
            <h3 className="text-xl font-semibold text-purple-800">Services Offered:</h3>
            <ul className="list-disc ml-5">
              <li>All beds have individual multi-parameter patient monitors & mechanical ventilator.</li>
              <li>Monitoring includes ECG, Invasive & Non-invasive blood pressure monitoring, CVP, ICP, PAP, Respiratory rate, ETCO2, and temperature.</li>
              <li>Mechanical ventilators with all modes including SIMV, PRVC, PS/CPAP, PCV, VCV, BIPAP, etc.</li>
              <li>Non-invasive ventilators and transport ventilators.</li>
              <li>Bedside ECG, ECHO, X-Ray, EEG, and ABG.</li>
              <li>Specialized procedures like Haemodialysis, Plasmapheresis, Fibreoptic Bronchoscopy, Percutaneous tracheostomy, and others.</li>
            </ul>

            <h2 className="text-2xl font-bold text-purple-900 mt-4">Anaesthesiology</h2>
            <p>
              The Department provides services for a wide range of surgeries including cardiovascular, pediatric, urology, head and neck, plastic, reconstructive, and obstetric surgeries.
            </p>

            <h3 className="text-xl font-semibold text-purple-800">General and Laparoscopic Surgery</h3>
            <p>
              The Department of General and Laparoscopic Surgery offers advanced surgical care and support for patients with acute illness or injury, based on a multi-disciplinary approach. We provide evidence-based medical care, with strict adherence to international treatment protocols.
            </p>
            <h3 className="text-xl font-semibold text-purple-800">Services Offered:</h3>
            <ul className="list-disc ml-5">
              <li>Laparoscopic Cholecystectomy, Appendicectomy, Hernia Repair, and more.</li>
              <li>Endoscopy: Upper gastrointestinal, colonoscopy & sigmoidoscopy.</li>
              <li>Lower Limb: Varicose veins, DVT, Gangrene limbs.</li>
              <li>Abdominal and trauma surgeries, tumor treatments, hernias, and anorectal diseases.</li>
              <li>Breast surgeries, including cancer surgeries and augmentation/reduction.</li>
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

export default GeneralSurgery;
