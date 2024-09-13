import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Route {
  path?: string; // path can be undefined
  label: string;
  subRoutes?: Route[];
}

const routes: Route[] = [
  { path: "/home", label: "Home" },
  {
    label: "Patients",
    subRoutes: [
      { path: "/patients/AllDetails", label: "All Patients" },
      { path: "/patients/add", label: "Add Patient" },
    ],
  },
  {
    label: "Doctors",
    subRoutes: [
      { path: "/AllDoctor", label: "All Doctors" },
      { path: "/doctor/doctorschedule", label: "Doctor Schedule" },
      { path: "/AddDoctor", label: "Add Doctor" },
    ],
  },
  { path: "/appointment", label: "Appointment" },
  // { path: "/contact", label: "Contact" },
  // { path: "/about", label: "About" },
  {path: "/Messages", label: "Messages"},
];

const Sidebar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Manage which dropdown is open
  const [selectedPath, setSelectedPath] = useState<string | null>(null); // Manage which sidebar option is selected
  const sidebarRef = useRef<HTMLDivElement | null>(null); // Ref to manage clicks outside sidebar

  // Toggle dropdown visibility
  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // Handle click outside sidebar to close dropdown
  const handleClickOutside = (e: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={sidebarRef}
      className="sticky top-0 font-antique olive block border-0 border-red-300 h-screen w-64 bg-secondary text-primary"
    >
      <nav className="mt-0">
        <ul>
          {routes.map((route, index) => (
            <li key={index} className="mb-2">
              {route.subRoutes ? (
                <>
                  <button
                    onClick={() => toggleDropdown(route.label)}
                    className={`block w-full text-left p-3 h-12 rounded flex justify-between items-center transition-colors duration-300 ${
                      openDropdown === route.label ? 'bg-fourth text-white' : 'hover:bg-fourth hover:text-white'
                    }`}
                  >
                    <span>{route.label}</span>
                    <span
                      className={`transform transition-transform duration-300 ease-in-out ${
                        openDropdown === route.label ? 'rotate-180' : ''
                      }`}
                    >
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  {openDropdown === route.label && (
                    <ul className="ml-4 mt-2">
                      {route.subRoutes.map((subRoute, subIndex) => (
                        <li key={subIndex} className="mb-2">
                          <Link
                            to={subRoute.path ?? "#"} // Use nullish coalescing for fallback
                            className={`block p-3 h-12 rounded transition-colors duration-300 ${
                              selectedPath === subRoute.path ? 'bg-fourth text-white' : 'hover:bg-fourth hover:text-white'
                            }`}
                            onClick={() => setSelectedPath(subRoute.path ?? null)} // Use nullish coalescing
                          >
                            {subRoute.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={route.path ?? "#"} // Use nullish coalescing for fallback
                  className={`block p-3 h-12 rounded transition-colors duration-300 ${
                    selectedPath === route.path ? 'bg-fourth text-white' : 'hover:bg-fourth hover:text-white'
                  }`}
                  onClick={() => setSelectedPath(route.path ?? null)} // Use nullish coalescing
                >
                  {route.label}
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
