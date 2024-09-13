import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaNotesMedical, FaCamera } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface PatientInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  medicalHistory: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
}

const PatientProfilePage: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string>('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80');
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '(123) 456-7890',
    address: '123 Main St, Anytown, USA',
    medicalHistory: 'No major health issues'
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result && typeof reader.result === 'string') {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPatientInfo(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: Errors = {};

    if (!patientInfo.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(patientInfo.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!/^\(\d{3}\)\s\d{3}-\d{4}$/.test(patientInfo.phone)) {
      newErrors.phone = 'Invalid phone number format';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      console.log('Form submitted:', patientInfo);
      // Show success message
      alert('Profile updated successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="relative h-38 w-full md:w-48 p-2">
              <img
                className="h-44 w-44 object-cover rounded-full"
                src={profileImage}
                alt="Patient profile"
              />
              <label
                htmlFor="profile-image"
                className="absolute bottom-2 right-2 bg-white rounded-full p-2 cursor-pointer shadow-lg hover:bg-gray-100 transition duration-300"
              >
                <FaCamera className="text-gray-600" />
                <input
                  id="profile-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                  aria-label="Change profile image"
                />
              </label>
            </div>
          </div>
          <div className="p-8 w-full">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Patient Profile</h1>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={patientInfo.name}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder="John Doe"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600" id="name-error">
                      {errors.name}
                    </p>
                  )}
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={patientInfo.email}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder="jane.doe@example.com"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                      {errors.email}
                    </p>
                  )}
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={patientInfo.phone}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder="(123) 456-7890"
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600" id="phone-error">
                      {errors.phone}
                    </p>
                  )}
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaMapMarkerAlt className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={patientInfo.address}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="123 Main St, Anytown, USA"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <label htmlFor="medicalHistory" className="text-sm font-medium text-gray-700">
                    Medical History
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaNotesMedical className="text-gray-400" />
                    </div>
                    <textarea
                      name="medicalHistory"
                      id="medicalHistory"
                      value={patientInfo.medicalHistory}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Medical history details"
                      rows={4}
                    />
                  </div>
                </motion.div>

                <button
                  type="submit"
                  className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfilePage;
