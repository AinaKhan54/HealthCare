import React, { useState, useRef, useEffect } from 'react';
import logo from "../../assets/Images/logo3.png";
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
    const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
    const notificationRef = useRef<HTMLDivElement | null>(null);

    // Handle user logout
    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    // Navigate to login page
    const handleLogin = () => {
        navigate('/login');
    };

    // Toggle notification dropdown
    const handleNotificationClick = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
                setIsNotificationOpen(false);
            }
        };

        // Add event listener to detect clicks
        document.addEventListener('mousedown', handleClickOutside);
        
        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className='sticky top-0 z-50 border border-gray-300 bg-tertiary flex items-center justify-between p-4 w-full'>
            <div className='flex items-center flex-shrink-0'>
                <img src={logo} alt='logo' className='w-40 h-30' />
            </div>
            <div className='flex-grow hidden lg:flex items-center ml-[80px]'>
                <div className='relative flex items-center w-64 max-w-lg'>
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
                    <FiBell 
                        className='text-purple-900 cursor-pointer' 
                        size={24} 
                        onClick={handleNotificationClick} 
                    />
                    {isNotificationOpen && (
                        <div 
                            ref={notificationRef} 
                            className='absolute right-0 w-72 bg-white border border-gray-200 rounded-md shadow-lg z-50 mt-[210px]'
                        >
                            <div className='p-3'>
                                <p className='text-lg font-semibold mb-2'>Notifications</p>
                                <div className='max-h-48 overflow-y-auto'>
                                    <div className='py-2 border-b border-gray-200'>
                                        <p className='text-sm text-gray-700'>You have new messages.</p>
                                    </div>
                                    <div className='py-2 border-b border-gray-200'>
                                        <p className='text-sm text-gray-700'>You have 5 appointments.</p>
                                    </div>
                                    <div className='py-2 border-b border-gray-200'>
                                        <p className='text-sm text-gray-700'>Don't forget your upcoming tasks!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className='px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600'
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            onClick={handleLogin}
                            className='px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600'
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
