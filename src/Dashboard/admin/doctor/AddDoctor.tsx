import React, { useState } from 'react';
import { createDoctor } from '../../../utils/userApi'; // Adjust the import path as necessary
import { z } from 'zod';

export interface DoctorData {
  _id?: string; // Optional
  name: string;
  email: string;
  mobileNumber: string;
  specialization: string;
  qualifications: string[]; // Array of strings for qualifications
  experience: number;
  availability: {
    days: string[]; // Array of days
    timeSlots: string[]; // Array of time slots
  };
}

const doctorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  mobileNumber: z.string().min(10, "Mobile number is required"),
  specialization: z.string().min(1, "Specialization is required"),
  qualifications: z.array(z.string()).min(1, "At least one qualification is required"),
  experience: z.number().int().nonnegative("Experience must be a non-negative integer"),
  availability: z.object({
    days: z.array(z.string()).nonempty("At least one day is required"),
    timeSlots: z.array(z.string()).nonempty("At least one time slot is required")
  })
});

const AddDoctor: React.FC = () => {
  const [formData, setFormData] = useState<DoctorData>({
    name: '',
    email: '',
    mobileNumber: '',
    specialization: '',
    qualifications: [''], // Initialize with at least one qualification
    experience: 0,
    availability: {
      days: [], // Initialize as empty array
      timeSlots: [] // Initialize as empty array
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof DoctorData) => {
    const value = e.target.value;

    if (field === 'experience') {
      setFormData(prevData => ({
        ...prevData,
        [field]: Number(value) as number
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [field]: value as string
      }));
    }
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'qualifications' | 'availability.days' | 'availability.timeSlots') => {
    const { value } = e.target;
    const values = value.split(',').map(item => item.trim());

    setFormData(prevData => {
      if (field === 'qualifications') {
        return {
          ...prevData,
          qualifications: values
        };
      } else if (field === 'availability.days') {
        return {
          ...prevData,
          availability: {
            ...prevData.availability,
            days: values
          }
        };
      } else if (field === 'availability.timeSlots') {
        return {
          ...prevData,
          availability: {
            ...prevData.availability,
            timeSlots: values
          }
        };
      }
      return prevData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const validationResult = doctorSchema.safeParse(formData);
    if (!validationResult.success) {
      setError(validationResult.error.errors.map(error => error.message).join(', '));
      setLoading(false);
      return;
    }

    try {
      await createDoctor(formData);
      setSuccess('Doctor added successfully!');
      setFormData({
        name: '',
        email: '',
        mobileNumber: '',
        specialization: '',
        qualifications: [''],
        experience: 0,
        availability: {
          days: [],
          timeSlots: []
        }
      });
    } catch (err) {
      console.error('Error adding doctor:', err);
      setError('Failed to add doctor. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Doctor</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange(e, 'name')}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange(e, 'email')}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="mobileNumber">Mobile Number:</label>
          <input
            id="mobileNumber"
            name="mobileNumber"
            type="text"
            value={formData.mobileNumber}
            onChange={(e) => handleChange(e, 'mobileNumber')}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="specialization">Specialization:</label>
          <input
            id="specialization"
            name="specialization"
            type="text"
            value={formData.specialization}
            onChange={(e) => handleChange(e, 'specialization')}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="qualifications">Qualifications:</label>
          <input
            id="qualifications"
            name="qualifications"
            type="text"
            value={formData.qualifications.join(', ')}
            onChange={(e) => handleArrayChange(e, 'qualifications')}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Separate multiple qualifications with commas"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="experience">Experience (years):</label>
          <input
            id="experience"
            name="experience"
            type="number"
            value={formData.experience}
            onChange={(e) => handleChange(e, 'experience')}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="availabilityDays">Availability Days:</label>
          <input
            id="availabilityDays"
            name="availabilityDays"
            type="text"
            value={formData.availability.days.join(', ')}
            onChange={(e) => handleArrayChange(e, 'availability.days')}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Separate multiple days with commas"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="availabilityTimeSlots">Availability Time Slots:</label>
          <input
            id="availabilityTimeSlots"
            name="availabilityTimeSlots"
            type="text"
            value={formData.availability.timeSlots.join(', ')}
            onChange={(e) => handleArrayChange(e, 'availability.timeSlots')}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Separate multiple time slots with commas"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition ease-in-out"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Doctor'}
        </button>
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
      </form>
    </div>
  );
};

export default AddDoctor;
