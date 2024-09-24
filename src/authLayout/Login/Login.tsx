import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from "../../auth/authSlice";
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import Image from "../../assets/Images/login_1.png";
import LoginImage from "../../assets/Images/medi.png";

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);
  console.log({ loading, error, isAuthenticated });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      alert(result.error.errors[0].message);
      return;
    }
    dispatch(loginRequest({ email, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/home-page');
    }
  }, [isAuthenticated, navigate]);

  const handleCreateAccount = () => {
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="fixed inset-0 bg-purple-200">
      {/* Main content */}
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left side for the image, hidden on smaller screens */}
        <div className="hidden lg:flex flex-none w-2/4 h-full bg-no-repeat bg-cover ml-24" style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'left', backgroundSize: 'contain' }}>
        </div>

        {/* Right side for the login form */}
        <div className="flex-grow flex items-center justify-center lg:justify-end p-4 lg:p-10 mt-10 lg:mr-28">
          <div className="max-w-md w-full p-8 border border-purple-300 rounded-md shadow-md bg-white/20 min-h-[500px]"> {/* Blur effect with reduced opacity */}
            <div className="mb-4">
              {/* Image Section */}
              <div className="mb-1 flex justify-center">
                <img
                  src={LoginImage}
                  alt="medicare"
                  className="w-2/3 rounded-md" // Clear image without any blur
                />
              </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-purple-700"></label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-purple-300 rounded-md"
                    placeholder="Enter email or username"
                    required
                    autoComplete="username" // Suggest username for autofill
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-purple-700"></label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-purple-300 rounded-md"
                    placeholder="Enter your password"
                    required
                    autoComplete="current-password" // Suggest current password for autofill
                  />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button
                  type="submit"
                  className={`w-full py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Login'}
                </button>
              </form>
            </div>

            <div className="mt-4 text-right">
              <button
                onClick={handleForgotPassword}
                className="text-purple-500 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="mb-2 text-gray-600">Don't have an account?</p>
              <button
                onClick={handleCreateAccount}
                className="w-full py-2 bg-purple-400 hover:bg-purple-600 text-white rounded-md"
              >
                Create New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
