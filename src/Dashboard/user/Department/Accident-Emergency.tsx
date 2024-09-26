import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DepartmentCard from '../../../Components/Department-Component/DepartmentCard';
import Image from "../../../assets/Images/emergency.jpg";
import DoctorImage from "../../../assets/Images/doctor7.jpg";
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

const AccidentEmergency: React.FC = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <PatientNavbar />
      <h1 className="text-3xl font-bold mt-6 text-purple-900 text-center lg:text-left lg:ml-20">Accident and Emergency</h1>
      <div className="flex flex-col lg:flex-row lg:mt-4">
        {/* Left Side - Department Card */}
        <div className="hidden lg:block w-full lg:w-1/3 p-4 lg:ml-12">
          <div className="overflow-x-auto">
            <DepartmentCard departments={departments} />
          </div>
        </div>

        {/* Right Side - Accident and Emergency Content */}
        <div className="w-full lg:w-2/3 p-6 bg-white text-gray-800 lg:mr-12">
          <div className="flex justify-center mb-6">
            <img
              src={Image}
              alt="Accident and Emergency"
              className="w-full h-auto md:w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-90 rounded-lg"
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-4">Accident and Emergency</h1>
          <p className="mb-4">
            The Department of Emergency and Trauma Care Services is well equipped to respond to any accident and emergency situation and provide critical care to trauma patients in order to ensure faster recovery. Critically ill or injured patients with life-threatening conditions are immediately taken under the care of a team of specialized emergency doctors, and the patient is evaluated, resuscitated, and stabilized as per protocols.
          </p>
          <p className="mb-4">
            Every Accident and Emergency case is of the highest priority in our hospital. Adhering to the highest standards of medical supervision and safety, we are dedicated to providing the finest treatment and care to emergency and trauma patients.
          </p>
          <p className="mb-4">
            There are separate operating rooms dedicated solely to trauma patients with 24-hour availability of specialists in Trauma Surgery, Orthopaedic Surgery, Neurosurgery, Surgical Critical Care, Anaesthesiology, Rehabilitation, Physiotherapy, and Emergency Medicine to adequately respond and care for various forms of trauma. Patients are kept under strict observation after treatment to ensure they recover completely without any complications.
          </p>
          <p className="mb-4">
            The rescue team consists of a critical care physician, technician, and rescue nurse along with additional specialists if required. Patient evacuation is done by surface ambulance. The ambulances have fully equipped mobile ICUs with advanced cardiac life support systems. We have successfully carried out several casualties from various places.
          </p>
          <h2 className="text-xl md:text-2xl font-bold mb-2">We Offer 24 Hours Emergency Health Care Services:</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>A comprehensive Trauma & Emergency Department for patient care supported by a well-coordinated ambulance service that is easily accessible.</li>
            <li>Designed as a state-of-the-art Trauma Centre, the unit has:</li>
            <ul className="list-disc ml-6 mb-4">
              <li>A large treatment room with advanced operative tables, lights, and Anaesthesia Machines.</li>
              <li>A plaster room and an isolation room.</li>
              <li>Blood Bank.</li>
              <li>CT Scan.</li>
              <li>MRI.</li>
              <li>Cardiac Monitors, Ventilators, and portable X-ray, Sonography & 2D Echo machines.</li>
              <li>Dedicated elevators for the immediate transfer of patients to the operating rooms and Intensive Care Units.</li>
            </ul>
            <li>The unit is supported by trained doctors around the clock, cutting-edge technology, and ambulance services with critical life-saving equipment manned by trained medical and paramedical staff. Our ambulances have the ability to transport critically ill patients in need of life support.</li>
            <li>Fastest Response Time in Accidents and various emergencies.</li>
            <li>Teamwork between various specialties.</li>
            <li>Coordinated work of high standards and ethics.</li>
            <li>Highest level of quality of patient care and services.</li>
            <li>Equipped to handle any kind of Mass Trauma and Casualties.</li>
            <li>For disaster or mass casualty situations, different systems for TRIAGE have been developed.</li>
          </ul>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Emergency Helpline Numbers:</h2>
          <p className="mb-4">9352304050, 0294-3535000, 2426000</p>
          <div className="bg-purple-200 rounded-lg shadow-md p-4 w-full md:w-64 mt-10 flex flex-col items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={DoctorImage}
                alt="Dr. Tarun Bhatnagar"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <h4 className="text-lg font-semibold mt-4">Dr. Tarun Bhatnagar</h4>
            <p>Sr. Consultant & HOD - Anaesthesia</p>
          </div>
          <button className="mt-4 px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
            Book an Appointment
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AccidentEmergency;
