import React, { useState } from 'react';
import logo from "../../assets/Images/logo3.png"
import userProfile from "../../assets/Images/user1.png"
import { FiSearch, FiBell } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store";
import { logout } from "../../auth/authSlice";

// Define Navbar component
const Navbar: React.FC = () => {
    // Use selectors to get state from Redux store
    const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    // Toggle dropdown menu
    const handleProfileClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Handle user logout
    const handleLogout = () => {
        dispatch(logout());
        setIsDropdownOpen(false);
        navigate('/login');
    };

    // Navigate to login page
    const handleLogin = () => {
        navigate('/login');
    };

    // Navigate to profile page
    const handleViewProfile = () => {
        navigate('/profile');
        setIsDropdownOpen(false);
    };

    return (
        <nav className='sticky top-0 z-50 border border-gray-300 bg-tertiary flex items-center justify-between p-4 w-full'>
            <div className='flex items-center flex-shrink-0'>
                <img src={logo} alt='logo' className='w-40 h-30' />
            </div>
            <div className='flex-grow flex items-center ml-20'>
                <div className='relative flex items-center w-64 max-w-lg ml-4'>
                    <input
                        type='text'
                        placeholder='Search'
                        className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-3 focus:ring-purple-300 transition duration-300 ease-in-out'
                    />
                    <FiSearch className='absolute right-2 text-gray-500' size={20} />
                </div>
            </div>
            <div className='relative flex items-center space-x-4'>
                <div className='relative flex items-center justify-center w-10 h-10 rounded-full bg-tertiary hover:bg-fourth transition duration-300 ease-in-out'>
                    <FiBell className='text-purple-900' size={24} />
                </div>
                <div className='relative'>
                    <img
                        src={userProfile}
                        alt="User Profile"
                        className="w-10 h-10 rounded-full cursor-pointer"
                        onClick={handleProfileClick}
                    />
                    {isDropdownOpen && (
                        <div className='absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-1'>
                            {isLoggedIn ? (
                                <>
                                    <button
                                        onClick={handleViewProfile}
                                        className='block w-full text-center px-4 py-2 text-gray-700 hover:bg-gray-100'
                                    >
                                        View Profile
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className='block w-full text-center px-4 py-2 text-gray-700 hover:bg-gray-100'
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={handleLogin}
                                    className='block w-full text-center px-4 py-2 text-purple-800 hover:bg-purple-200'
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
