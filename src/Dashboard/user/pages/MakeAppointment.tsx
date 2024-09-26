import React, { useState, ChangeEvent, FormEvent } from 'react';
import { z } from 'zod';
import { createAppointment } from "../../../utils/userApi";
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import Image from "../../../assets/Images/appoint.png"; // Adjust the path to your image
import Footer from '../../../layout/userLayout/footer';

// Zod schema for appointment form validation
const appointmentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  mobileNumber: z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits"),
  adharNo: z.string().regex(/^\d{12}$/, "Aadhar number must be 12 digits"),
  gender: z.string().min(1,"Gender is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  reason: z.string().min(10, "Reason must be at least 10 characters long"),
});

export interface Appointment {
  name: string;
  email: string;
  mobileNumber: string;
  adharNo: string;
  gender: string;
  date: string;
  time: string;
  reason: string;
}

const MakeAppointment: React.FC = () => {
  const initialFormData = {
    name: '',
    email: '',
    mobileNumber: '',
    adharNo: '',
    gender: '',
    date: '',
    time: '',
    reason: '',
  };

  const [formData, setFormData] = useState<Appointment>(initialFormData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Record<string, string | null>>({});
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError({});
    setSuccess(null);

    try {
      // Validate form data using Zod locally on frontend
      appointmentSchema.parse(formData);

      // Send form data to backend
      await createAppointment(formData);
      setSuccess('Appointment created successfully!');

      // Clear form data after successful submission
      setFormData(initialFormData);
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        setError(err.errors.reduce((acc: any, error: any) => {
          acc[error.path[0]] = error.message;
          return acc;
        }, {}));
      } else if (err.response && err.response.data.errors) {
        // Backend validation errors
        const backendErrors = err.response.data.errors.reduce((acc: any, error: any) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
        setError(backendErrors);
      } else {
        console.error(err);
        setError({ general: 'Failed to make the appointment. Please try again.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col h-screen">
     <PatientNavbar />
      <div className="flex-grow flex flex-col-reverse md:flex-row p-6 w-full max-w-2xl md:ml-[240px]">
        {/* Form Section */}
        <div className="w-full w-[1400px] ">
          <h2 className="text-2xl font-bold text-purple-900 text-center mb-4">Make an Appointment</h2>
          {success && <p className="text-green-600">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Form Fields */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
              {error.name && <p className="text-red-600">{error.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
              {error.email && <p className="text-red-600">{error.email}</p>}
            </div>
            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
              {error.mobileNumber && <p className="text-red-600">{error.mobileNumber}</p>}
            </div>
            <div>
              <label htmlFor="adharNo" className="block text-sm font-medium text-gray-700">Aadhar No</label>
              <input
                type="text"
                id="adharNo"
                name="adharNo"
                value={formData.adharNo}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
              {error.adharNo && <p className="text-red-600">{error.adharNo}</p>}
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {error.gender && <p className="text-red-600">{error.gender}</p>}
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
              {error.date && <p className="text-red-600">{error.date}</p>}
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
              {error.time && <p className="text-red-600">{error.time}</p>}
            </div>
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Appointment</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
              {error.reason && <p className="text-red-600">{error.reason}</p>}
            </div>
            {error.general && <p className="text-red-600">{error.general}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white p-2 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </form>
          <img
          src={Image}
          alt="Decorative"
          className="absolute bottom-4 right-4 hidden lg:block w-90 h-90 object-cover rounded-lg"
        />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MakeAppointment;
