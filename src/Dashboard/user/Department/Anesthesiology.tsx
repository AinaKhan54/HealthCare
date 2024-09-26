import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DepartmentCard from '../../../Components/Department-Component/DepartmentCard';
import Image from "../../../assets/Images/care3.jpg";
import DoctorImage from "../../../assets/Images/doctor1.jpg";
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
const Anesthesiology: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <h1 className="text-3xl font-bold mt-6 text-purple-900 text-center lg:text-left lg:ml-20">Anesthesiology</h1>
      <div className="flex mt-4">
        {/* Left Side - Department Card (hidden on mobile) */}
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
              alt="Anesthesiology Department"
              className="h-auto md:w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-90 rounded-lg"
            />
          </div>

          {/* Content for Anesthesiology */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Critical Care & Anesthesiology</h2>
            <p>
              The Department of Anaesthesiology and Critical care medicine offers consultation in all areas of anaesthesia and critical care medicine.
            </p>

            {/* Critical Care Medicine Section */}
            <h3 className="text-xl font-semibold mt-6">Critical Care Medicine:</h3>
            <p>
              The division of critical care medicine has 44 beds, divided under the following units: Medical Intensive Care Unit (MICU), Surgical Intensive Care Unit (SICU), Cardiac ICU, Cardiac step-down unit, Neuro Surgical ICU, and Stroke Unit. All medical and surgical cases needing intensive care are admitted here. The specialties covered include internal medicine, endocrinology, gastroenterology, nephrology, neurology, pulmonology, pediatrics, rheumatology, skin and infectious diseases, obstetrics and gynecology, plastic surgery, general surgery, neurosurgery, ENT, orthopedics, polytrauma, and oncology.
            </p>

            {/* Services Offered */}
            <h3 className="text-xl font-semibold mt-6">Services Offered:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>All beds have individual multi-parameter patient monitors & mechanical ventilator.</li>
              <li>Monitoring includes ECG, Invasive & Non-invasive blood pressure monitoring, CVP, ICP, PAP, Respiratory rate, ETCO2, and temperature. Monitors have features for storing data over a 24-hour period.</li>
              <li>The mechanical ventilators that are available have all modes including SIMV, PRVC, PS/CPAP, PCV, VCV, BIPAP, etc.</li>
              <li>Ventilators also display ventilator waveforms and loops that help the intensivist in better titration and fine-tuning of ventilatory management.</li>
              <li>Non-invasive ventilators and transport ventilators are also available.</li>
              <li>Bedside ECG, ECHO, X-Ray, EEG, and ABG.</li>
            </ul>

            {/* Specialized Procedures */}
            <h3 className="text-xl font-semibold mt-6">Specialized Procedures (Examples):</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Haemodialysis, Plasmapheresis, Fibreoptic Bronchoscopy, Percutaneous tracheostomy, Minitracheostomy, and ICD insertion.</li>
              <li>Ultrasound-guided liver abscess drainage, pigtail catheterization, arterial and central venous cannulation, paracentesis, etc.</li>
            </ul>

            {/* Anesthesiology Section */}
            <h3 className="text-xl font-semibold mt-6">Anaesthesiology:</h3>

            {/* Anesthesia Services */}
            <h4 className="text-lg font-semibold mt-4">Cardiovascular Anesthesiology:</h4>
            <p>
              The Department of Cardiac Anaesthesia & Intensive care is imparting anaesthesia services to all types of cardiac surgical procedures (routine & emergency). We conduct beating heart as well as bypass surgeries for CABGs, complex aneurysm repair, emergency aortic dissection repair, as well as valvular surgical cases.
            </p>
            
            <h4 className="text-lg font-semibold mt-4">Pediatric Anaesthesia:</h4>
            <p>
              The Anaesthesiologists also provide services for pediatric surgical patients, e.g., Laparoscopic Surgeries. The intra and post-operative ventilatory management of these patients is taken care of by specialized Anaesthesiologists and intensivists.
            </p>

            <h4 className="text-lg font-semibold mt-4">Urology:</h4>
            <p>
              Serves as a tertiary referral center for routine prostatic surgery, percutaneous nephrolithotomies, URS, flexible ureteroscopy, and renal, bladder, prostate, and penile malignancies.
            </p>

            <h4 className="text-lg font-semibold mt-4">Anaesthesia for Head and Neck/Plastic and Reconstructive Surgery:</h4>
            <p>
              A section of Anaesthesia for Head and Neck Surgery, Onco-Surgery, Plastic and Reconstructive Surgery, Podiatry, and Maxillofacial Surgery caters to a wide range of cases.
            </p>

            <h4 className="text-lg font-semibold mt-4">Obstetrics:</h4>
            <p>
              This is a tertiary referral center that provides a full range of obstetric-related care. Obstetric anaesthesia services are provided round-the-clock, seven days a week with state-of-the-art facilities dedicated exclusively for obstetrics and gynecology.
            </p>
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Anesthesiology;
