import React, { useState, ChangeEvent, FormEvent } from 'react';
import { z } from 'zod';
import { createPatient } from '../../../utils/userApi';

// Zod validation schema
const patientSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  mobileNumber: z.string().min(10, 'Mobile number must be at least 10 characters long'),
  age: z.string().nonempty('Age is required'),
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({ message: 'Select a valid gender' }),
  }),
  address: z.string().min(1, 'Address is required'),
  medicalHistory: z.string().optional(),
});

interface PatientsFormData {
  name: string;
  email: string;
  mobileNumber: string;
  age: string; // Kept as string for date input
  gender: string;
  address: string;
  medicalHistory: string;
}

const PatientRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<PatientsFormData>({
    name: '',
    email: '',
    mobileNumber: '',
    age: '',
    gender: '',
    address: '',
    medicalHistory: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setErrors({});

    try {
      // Validate form data
      patientSchema.parse(formData);

      // Prepare FormData for submission
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('mobileNumber', formData.mobileNumber);
      formDataToSend.append('age', formData.age);
      formDataToSend.append('gender', formData.gender);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('medicalHistory', formData.medicalHistory);

      // API call to create patient
      await createPatient(formDataToSend);

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        mobileNumber: '',
        age: '',
        gender: '',
        address: '',
        medicalHistory: '',
      });

      alert('Patient registration successful!');
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formattedErrors: Record<string, string> = {};
        err.errors.forEach((issue) => {
          const path = issue.path.join('.');
          formattedErrors[path] = issue.message;
        });
        setErrors(formattedErrors);
      } else {
        alert('There was an issue with the submission. Please try again.');
      }
    }
  };

  return (
    <div className='p-2 pl-14 md:pl-20 bg-gray-100'>
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-purple-900 text-center">Patient Registration Form</h2>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors['name'] && <p className="text-red-600">{errors['name']}</p>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors['email'] && <p className="text-red-600">{errors['email']}</p>}
            </div>

            {/* Mobile Number */}
            <div className="mb-4">
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors['mobileNumber'] && <p className="text-red-600">{errors['mobileNumber']}</p>}
            </div>

            {/* Age  */}
            <div className="mb-4">
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="date"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors['age'] && <p className="text-red-600">{errors['age']}</p>}
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors['gender'] && <p className="text-red-600">{errors['gender']}</p>}
            </div>

            {/* Address Field */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors['address'] && <p className="text-red-600">{errors['address']}</p>}
            </div>

            {/* Medical History */}
            <div className="mb-4">
              <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700">Medical History</label>
              <input
                type="text"
                id="medicalHistory"
                name="medicalHistory"
                value={formData.medicalHistory}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors['medicalHistory'] && <p className="text-red-600">{errors['medicalHistory']}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-purple-900 text-white py-2 px-4 rounded-md hover:bg-purple-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientRegistrationForm;
