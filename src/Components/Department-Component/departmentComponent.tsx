import React from 'react';
import DepartmentCard from './DepartmentCard'; // Adjust the import path

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

const DepartmentList: React.FC = () => {
  return (
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-screen-md">
        <DepartmentCard departments={departments} /> {/* Pass departments prop */}
      </div>
    </div>
  );
};

export default DepartmentList;
