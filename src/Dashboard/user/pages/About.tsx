import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import Footer from '../../../layout/userLayout/footer';
import Image from "../../../assets/Images/about.png";

const About: React.FC = () => {
  return (
    <div>
      <PatientNavbar />
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Image at the top */}
        <div className="relative mb-8">
          <img
            src={Image}
            alt="About Us"
            className="w-full h-60 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
            <h1 className="text-3xl font-bold text-white text-center px-4 py-2">Medicare: We take care of your healthy life</h1>
          </div>
        </div>

        {/* About Medicare Section */}
        <div className="text-gray-800 space-y-8 w-full mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-4 border-purple-500 inline-block pb-2">About Medicare</h2>
          <p className="leading-relaxed text-justify mb-4">
            Medicare Hospital is a leading healthcare provider dedicated to delivering top-notch medical services with compassion and expertise. Our hospital is built on a foundation of trust, innovation, and patient-centered care, ensuring that every patient receives personalized attention and the best possible treatment. With a comprehensive range of specialties, state-of-the-art facilities, and a team of highly skilled professionals, we are committed to maintaining the highest standards in medical care.
          </p>
          <p className="leading-relaxed text-justify mb-4">
            We understand that healthcare is not just about treating illnesses; it’s about promoting overall wellness and improving quality of life. At Medicare, we strive to create a comfortable and safe environment where patients and their families feel supported and confident in their care journey. From preventive care to advanced surgical procedures, our multidisciplinary team is equipped to handle a wide range of medical conditions with expertise and empathy.
          </p>
          <p className="leading-relaxed text-justify mb-8">
            With our unwavering commitment to excellence, Medicare Hospital continually invests in the latest medical technology, ongoing staff training, and patient education to provide the best outcomes for our community.
          </p>

          {/* Medicare Unique Features */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8 w-full">
            <h3 className="text-2xl font-semibold mb-4 text-black-600">Medicare's Unique Features Include:</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Comprehensive 24-hour emergency and trauma care services.</li>
              <li>A dedicated team of world-class doctors, healthcare professionals, and support staff.</li>
              <li>Advanced medical equipment and cutting-edge technology for accurate diagnosis and treatment.</li>
              <li>Hygienic, comfortable, and patient-friendly in-patient and outpatient facilities.</li>
              <li>Continuous Quality Improvement (CQI) and Total Quality Management (TQM) practices.</li>
              <li>A focus on preventive healthcare and regular health education camps.</li>
            </ul>
          </div>

          {/* Medicare Highlights */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <h3 className="text-2xl font-semibold mb-4 text-black-600">Medicare Highlights</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">&#10003;</span> 24-hour Trauma Center
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">&#10003;</span> NABH Accredited
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">&#10003;</span> Multi Super Specialty Hospital
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">&#10003;</span> State-of-the-Art Medical Equipment
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">&#10003;</span> Highly Qualified Team: Management professionals, world-class doctors, caring paramedical staff, technicians, and patient care personnel.
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">&#10003;</span> Clean, Hygienic, and Comfortable Facilities: Comprehensive OPD and in-patient services.
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">&#10003;</span> Intensive Care Units (ICU): Medical, Surgical, Neuro, and Cardiac.
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">&#10003;</span> Round-the-Clock Services: Pharmacy, ambulance, diagnostic, trauma, emergency, and 24-hour blood bank.
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">&#10003;</span> Patient Education: Regular health camps and educational initiatives.
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">&#10003;</span> Total Quality Management (TQM) and Continuous Quality Improvement (CQI).
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">&#10003;</span> Preventive Healthcare Programs
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">&#10003;</span> Family Participation: Encouraging family involvement in patient care.
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">&#10003;</span> 24/7 In-house Cafeteria: Managed by a qualified dietitian to provide customized meals to patients.
              </li>
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

export default About;
