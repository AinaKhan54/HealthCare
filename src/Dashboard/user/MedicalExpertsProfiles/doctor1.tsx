import React from 'react';
import doctorImage from "../../../assets/Images/doctor1.jpg";

const DoctorProfile: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">Dr. S. K. Kaushik</h1>
      <img
        src={doctorImage}
        alt="Dr. S. K. Kaushik"
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold mb-2">Consultant Cardiology</h2>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-bold mb-2">Qualifications:</h3>
        <p className="mb-1">MBBS, MD (Medicine), DM (Cardiology)</p>
        <p className="mb-1">MD (Medicine), DM (Cardiology)</p>
        <p className="mb-1">F.I.A.E., F.I.S.C., F.C.S.I., F.A.C.C. (USA)</p>
        <h3 className="text-lg font-bold mt-4">Experience:</h3>
        <p>Ex Principal, RNT Medical College</p>
        <p>Director & Chief Consultant Cardiology</p>
      </div>
    </div>
  );
};

export default DoctorProfile;
