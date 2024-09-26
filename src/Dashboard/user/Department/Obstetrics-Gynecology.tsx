import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import DepartmentCard from '../../../Components/Department-Component/DepartmentCard';
import Image from "../../../assets/Images/gyno.jpg";
import DoctorImage from "../../../assets/Images/doctor5.jpg";
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

const ObstetricsGynecology: React.FC = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <h1 className="text-3xl font-bold mt-6 text-purple-900 ml-20">Obstetrics & Gynecology</h1>
      <div className="flex flex-col md:flex-row mt-4">
        {/* Left Side - Department Card */}
        <div className="hidden lg:block w-full lg:w-1/3 p-4 lg:ml-12">
          <div className="overflow-x-auto">
            <DepartmentCard departments={departments} />
          </div>
        </div>

        {/* Right Side - Obstetrics & Gynecology Content */}
        <div className="w-full md:w-2/3 p-6 bg-white text-gray-800">
          <div className="flex justify-center mb-6">
            <img
              src={Image}
              alt="Obstetrics & Gynecology Department"
              className="h-auto md:w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-90 rounded-lg"
            />
          </div>

          {/* Content for Obstetrics & Gynecology */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Obstetrics & Gynecology</h2>
            <p>
              The Department of Obstetrics and Gynecology provides the best quality diagnostic, therapeutic, surgical, and counseling facilities for women. It is well-equipped with sophisticated delivery rooms and gynecology-conversant operation theaters with advanced and modern equipment to cater to all types of gynecology procedures. Our multidisciplinary team of experienced clinicians and specialist nurses ensure that all our patients’ needs are addressed, providing our patients and their families with the support they need during their period of illness and recovery.
            </p>
            <p>
              We offer expertise and the latest Reproductive Technologies in the area of infertility and treatment plans designed for individual needs by our Genesis IVF center.
            </p>

            {/* Services Offered */}
            <h3 className="text-xl font-semibold mt-6">Services Offered:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Well baby clinic</li>
              <li>Normal delivery</li>
              <li>Epidural analgesia-Painless labor</li>
              <li>Lower Segment Cesarean Section (LSCS)</li>
              <li>Minimally invasive Surgeries</li>
              <li>Infertility Management by our Genesis IVF center</li>
              <li>Hysterectomy</li>
              <li>Routine obstetrics and Gynecology procedures</li>
              <li>Adolescent health care</li>
              <li>Cancer Screening</li>
              <li>Postmenopausal Clinic</li>
              <li>Uro Gynecology</li>
            </ul>

            {/* Specialized Procedures */}
            <h3 className="text-xl font-semibold mt-6">Specialized Procedures:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Endoscopic Surgeries</li>
              <li>Open Surgeries</li>
              <li>Vaginal surgeries</li>
            </ul>

            {/* Indications */}
            <h3 className="text-xl font-semibold mt-6">Indications:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Management of abnormal uterine bleeding</li>
              <li>Chronic pelvic pain</li>
              <li>Menstrual disorders</li>
              <li>PCOS, Hirsutism</li>
              <li>Latest techniques to deal with Endometriosis, Ovarian Cysts</li>
              <li>Mullerian anomalies</li>
              <li>Myomectomy</li>
              <li>Removal of Fibroid</li>
              <li>Management of Fibroid</li>
              <li>Ectopic Pregnancy</li>
            </ul>

            {/* Obstetrics Department */}
            <h3 className="text-xl font-semibold mt-6">Obstetrics Department:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Normal & Operative Delivery</li>
              <li>High risk Obstetrics</li>
              <li>Painless labor</li>
              <li>Lower Segment Cesarean Section (LSCS)</li>
              <li>Management of Vesicular mole</li>
              <li>Management of Ectopic Gestation</li>
              <li>Antenatal Checkups</li>
              <li>Solutions for Birth defects or Congenital disorders</li>
              <li>Complete mother and newborn care</li>
            </ul>

            {/* Other services */}
            <h3 className="text-xl font-semibold mt-6">Other services provided for the treatment of:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Menopausal problems</li>
              <li>Hormonal problems</li>
              <li>Adolescence problems</li>
              <li>Family Planning or Contraceptive care</li>
              <li>Pre-marital and pre-natal Counseling</li>
              <li>Reproductive endocrine care</li>
              <li>Infertility Evaluation and management</li>
              <li>Vaccinations for Hepatitis, cervical cancer</li>
            </ul>

            {/* Highlights */}
            <h3 className="text-xl font-semibold mt-6">Highlights:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Well-equipped labor room with fetal monitor</li>
              <li>Endoscopic surgery, Laparoscopic Hysterectomy, Ovarian Cystectomy, and more</li>
              <li>Low-cost IVF infertility treatment services</li>
              <li>24x7 blood bank services for emergencies</li>
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

export default ObstetricsGynecology;
