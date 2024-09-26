import React, { useState, ChangeEvent, FormEvent } from 'react';
import { z } from 'zod';
import { createPatient } from '../../../utils/userApi';
import { toast, Toaster } from 'react-hot-toast'; // Importing toast

// Zod validation schema
const patientSchema = z.object({
  firstname: z.string().min(1, 'Firstname is required'),
  lastname: z.string().min(1, 'Lastname is required'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters long'),
  email: z.string().email('Invalid email format'),
  dob: z.string().nonempty('Date of birth is required'),
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({ message: 'Select a valid gender' }),
  }),
  address: z.string().min(1, 'Address is required'),
  medical: z.string().min(1, 'Medical is required')
});

export interface PatientsFormData {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  address: string;
  medical: string;
}

const PatientRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<PatientsFormData>({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    dob: '',
    gender: '',
    address: '',
    medical: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
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

      // API call to create patient
      await createPatient(formData);

      // Clear form after successful submission
      setFormData({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        dob: '',
        gender: '',
        address: '',
        medical: '',
      });

      // Show success toast
      toast.success('Patient registration successful!'); // Success toast
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
      <Toaster /> {/* Toaster component for notifications */}
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-purple-900 text-center">Patient Registration Form</h2>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">Firstname</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors['firstname'] && <p className="text-red-600">{errors['firstname']}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Lastname</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors['lastname'] && <p className="text-red-600">{errors['lastname']}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors['phone'] && <p className="text-red-600">{errors['phone']}</p>}
            </div>

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

            <div className="mb-4">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors['dob'] && <p className="text-red-600">{errors['dob']}</p>}
            </div>

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

            <div className="mb-4">
              <label htmlFor="medical" className="block text-sm font-medium text-gray-700">Medical History</label>
              <textarea
                id="medical"
                name="medical"
                value={formData.medical}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                rows={4}
              />
              {errors['medical'] && <p className="text-red-600">{errors['medical']}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
            >
              Register Patient
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientRegistrationForm;
