import React, { useState } from 'react';
import axios from 'axios';

const AddDoctor: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    specialization: '',
    degree: '',
    mobile: '',
    email: '',
    joiningDate: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await axios.post('your-api-endpoint', formData);
      setSuccess('Doctor added successfully!');
      setFormData({
        name: '',
        department: '',
        specialization: '',
        degree: '',
        mobile: '',
        email: '',
        joiningDate: ''
      });
    } catch (err) {
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
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="department">
            Department:
          </label>
          <input
            id="department"
            name="department"
            type="text"
            value={formData.department}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="specialization">
            Specialization:
          </label>
          <input
            id="specialization"
            name="specialization"
            type="text"
            value={formData.specialization}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="degree">
            Degree:
          </label>
          <input
            id="degree"
            name="degree"
            type="text"
            value={formData.degree}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="mobile">
            Mobile:
          </label>
          <input
            id="mobile"
            name="mobile"
            type="text"
            value={formData.mobile}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="joiningDate">
            Joining Date:
          </label>
          <input
            id="joiningDate"
            name="joiningDate"
            type="date"
            value={formData.joiningDate}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Doctor'}
        </button>

        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
      </form>
    </div>
  );
};

export default AddDoctor;
