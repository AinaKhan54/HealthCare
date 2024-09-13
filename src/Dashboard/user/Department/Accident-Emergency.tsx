import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DepartmentCard from '../../../Components/Department-Component/DepartmentCard';
import Image from "../../../assets/Images/emergency.jpg";
import DoctorImage from "../../../assets/Images/doctor7.jpg"

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

const AccidentEmergency: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <h1 className="text-3xl font-bold mt-6 text-purple-900 ml-20">Accident and Emergency</h1>
      <div className="flex mt-4">
        {/* Left Side - Department Card */}
        <div className="w-1/3 p-4 ml-12">
          <DepartmentCard departments={departments} />
        </div>

        {/* Right Side - Accident and Emergency Content */}
        <div className="w-2/3 p-6 bg-white text-gray-800">
          <div className="flex justify-center mb-6">
            <img
              src={Image}
              alt="Contact Us"
              className="h-auto md:w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-90 rounded-lg "
            />
          </div>

          <h1 className="text-3xl font-bold mb-4">Accident and Emergency</h1>
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
          <h2 className="text-2xl font-bold mb-2">We Offer 24 Hours Emergency Health Care Services:</h2>
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
          <h2 className="text-2xl font-bold mb-2">Emergency Helpline Numbers:</h2>
          <p className="mb-4">9352304050, 0294-3535000, 2426000</p>
          <div className='bg-purple-200 rounded-lg shadow-md p-4 w-64 mt-10 h-72'>
              {/* Image */}
               <div className="flex justify-center">
                 <img
                    src={DoctorImage} // Replace with the actual path to your image
                    alt="Dr. Tarun Bhatnagar"
                    className="w-32 h-32 rounded-full object-cover" // Adjust size as needed
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
  );
};

export default AccidentEmergency;
