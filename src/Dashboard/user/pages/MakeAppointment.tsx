import React, { useState, ChangeEvent, FormEvent } from 'react';
import { z } from 'zod';
import { createAppointment } from "../../../utils/userApi";
import PatientNavbar from "../../../layout/userLayout/PatientNavbar";
import Image from "../../../assets/Images/appoint.png"; // Adjust the path to your image

// Zod schema for appointment form validation
const appointmentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  mobileNumber: z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits"),
  adharNo: z.string().regex(/^\d{12}$/, "Aadhar number must be 12 digits"),
  gender: z.enum(["male", "female", "other"]),
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
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Validate form data using Zod
      appointmentSchema.parse(formData);

      // Send form data to backend
      await createAppointment(formData);
      setSuccess('Appointment created successfully!');

      // Clear form data after successful submission
      setFormData(initialFormData);
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0]?.message); // Display first validation error
      } else {
        console.error(err);
        setError('Failed to make the appointment. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col h-screen">
      <PatientNavbar />
      <div className="flex-grow p-6 w-full max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-900 text-center mb-4">Make an Appointment</h2>
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="adharNo" className="block text-sm font-medium text-gray-700">Aadhar No</label>
            <input
              type="text"
              id="adharNo"
              name="adharNo"
              value={formData.adharNo}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason</label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm focus:outline-none hover:bg-indigo-700"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
      <div className="absolute top-5 right-0">
        <img src={Image} alt="Make Appointment" className="w-96 h-96 object-cover"/>
      </div>
    </div>
  );
};

export default MakeAppointment;
