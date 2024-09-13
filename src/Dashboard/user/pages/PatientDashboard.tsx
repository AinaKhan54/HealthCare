// src/components/dashboard/patients/PatientDashboard.tsx

import React from 'react';
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';

const PatientDashboard: React.FC = () => {
  return (
    <div>
      <PatientNavbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Patient Dashboard</h1>
        {/* Dashboard content goes here */}
        <p>Welcome to the Patient Dashboard. Add your content here.</p>
      </div>
    </div>
  );
};

export default PatientDashboard;
