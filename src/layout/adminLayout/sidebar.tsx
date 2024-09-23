import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UserGroupIcon, UserIcon, CalendarIcon, MapIcon } from '@heroicons/react/24/outline';
import { FaChevronRight } from 'react-icons/fa';

interface Route {
  path?: string;
  label: string;
  subRoutes?: Route[];
  icon: JSX.Element;
}

const routes: Route[] = [
  { path: "/admin/home-page", label: "Home", icon: <HomeIcon className="w-6 h-6 ml-[3px]" /> },
  {
    label: "Patients", icon: <UserGroupIcon className="w-6 h-6 ml-[3px]" />, subRoutes: [
      { path: "/admin/patients-all-details", label: "All Patients", icon: <UserGroupIcon className="w-5 h-5" /> },
      { path: "/admin/add-patients", label: "Add Patient", icon: <UserIcon className="w-5 h-5" /> },
    ],
  },
  {
    label: "Doctors", icon: <UserGroupIcon className="w-6 h-6 ml-[3px]" />, subRoutes: [
      { path: "/admin/doctor/doctor-all-doctor", label: "All Doctors", icon: <UserGroupIcon className="w-5 h-5" /> },
      { path: "/admin/doctor/doctor-schedule", label: "Doctor Schedule", icon: <CalendarIcon className="w-5 h-5" /> },
      { path: "/admin/doctor/add-Doctor", label: "Add Doctor", icon: <UserIcon className="w-5 h-5" /> },
    ],
  },
  { path: "/admin/appointment", label: "Appointment", icon: <CalendarIcon className="w-6 h-6 ml-[3px]" /> },
  { path: "/admin/messages", label: "Messages", icon: <MapIcon className="w-6 h-6 ml-[3px]" /> },
];

const Sidebar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(true); // Manage sidebar open/close state
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label); // Toggle dropdown visibility
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      setOpenDropdown(null); // Close dropdown if clicked outside
      if (window.innerWidth < 768) {
        setIsOpen(false); // Close sidebar on mobile when clicking outside
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false); // Automatically close sidebar on smaller screens
      } else {
        setIsOpen(true); // Automatically open sidebar on larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set the initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false); // Close sidebar when a link is clicked on mobile
    }
  };

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 mt-[70px] left-0 h-screen bg-purple-200 text-purple-800 transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-14'} overflow-hidden`}
    >
      <div className="flex items-center mb-2 justify-between p-4 border-b border-purple-200">
        {isOpen && (
          <h1 className="text-xl font-bold hidden md:block">Admin Dashboard</h1>
        )}
      </div>
      <nav className="mt-0">
        <ul className="space-y-2">
          {routes.map((route, index) => (
            <li key={index} className="relative">
              {route.subRoutes ? (
                <>
                  <button
                    onClick={() => toggleDropdown(route.label)}
                    className={`block w-full text-left p-3 h-12 rounded flex items-center transition-colors duration-300 ${openDropdown === route.label ? 'bg-fourth text-white' : 'hover:bg-fourth hover:text-white'}`}
                  >
                    <span className="mr-4">{route.icon}</span>
                    <span className={`flex-1 ${!isOpen ? 'hidden' : 'block'} md:block`}>{route.label}</span>
                    <span className={`ml-auto flex items-center transform transition-transform duration-300 ease-in-out ${openDropdown === route.label ? 'rotate-90' : ''}`}>
                      <FaChevronRight className="w-4 h-4 text-primary" />
                    </span>
                  </button>
                  {openDropdown === route.label && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {route.subRoutes.map((subRoute, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subRoute.path ?? "#"}
                            className={`block p-3 h-12 rounded flex items-center transition-colors duration-300 ${selectedPath === subRoute.path ? 'bg-fourth text-white' : 'hover:bg-fourth hover:text-white'}`}
                            onClick={() => {
                              setSelectedPath(subRoute.path ?? null);
                              handleLinkClick(); // Close sidebar after clicking a link
                            }}
                          >
                            <span className="mr-4">{subRoute.icon}</span>
                            <span className={`hidden ${!isOpen ? 'hidden' : 'block'} md:block`}>{subRoute.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={route.path ?? "#"}
                  className={`block p-3 h-12 rounded flex items-center transition-colors duration-300 ${selectedPath === route.path ? 'bg-fourth text-white' : 'hover:bg-fourth hover:text-white'}`}
                  onClick={() => {
                    setSelectedPath(route.path ?? null);
                    handleLinkClick(); // Close sidebar after clicking a link
                  }}
                >
                  <span className="mr-4">{route.icon}</span>
                  <span className={`hidden ${!isOpen ? 'hidden' : 'block'} md:block`}>{route.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
