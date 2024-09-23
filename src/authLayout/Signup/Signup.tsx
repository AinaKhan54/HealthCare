import React, { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import Image from "../../assets/Images/sign123.png";
import LoginImage from "../../assets/Images/medi.png";

const signupSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  roleName: z.string().min(1, "Role name is required"),
});

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roleName, setRoleName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = signupSchema.safeParse({ username, email, password, roleName });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        username,
        email,
        password,
        roleName,
      });
      setSuccess(response.data.message);
      setError(null);
      setTimeout(() => navigate('/login'), 1000);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Signup failed');
      setSuccess(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-purple-200">
    {/* Main content */}
    <div className="flex flex-col lg:flex-row h-full">
      {/* Left side for the image, hidden on smaller screens */}
      <div className="hidden lg:flex flex-none w-2/4 h-full bg-no-repeat bg-cover ml-32" style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundSize: 'contain' }}>
      </div>

      {/* Form Section */}
      <div className="flex-grow flex items-center justify-center lg:justify-end p-4 lg:p-10 mt-10 lg:mr-28">
        <div className="max-w-md w-full p-8 border border-purple-300 rounded-md shadow-md bg-white/20 min-h-[500px]">
        <div className="mb-4">
              {/* Image Section */}
              <div className="mb-1 flex justify-center">
                <img
                  src={LoginImage}
                  alt="medicare"
                  className="w-2/3 rounded-md " // Adjust class names as needed
                />
              </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700"></label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter Your Username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700"></label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700"></label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder='Password'
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700"></label>
              <input
                type="text"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder='Role Name'
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <button
              type="submit"
              className="w-full py-2 bg-purple-500 hover:bg-purple-800 text-white rounded-md"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Signup;
