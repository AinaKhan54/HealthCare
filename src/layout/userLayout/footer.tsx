import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
  ];

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about" },
    { text: "Appointments", url: "/make-appointment" },
    { text: "Medical Experts", url: "/medical-expert" },
    { text: "Health Blog", url: "/health-blog" },
  ];

  return (
    <footer className="bg-purple-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">MediCare</h3>
            <p className="text-sm">Providing quality healthcare services</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-900 transition-colors duration-300"
                  aria-label={`Visit our ${link.url.split(".")[1]} page`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="hover:text-purple-900 transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center hover:text-purple-900 transition-colors duration-300">
                <FaPhone className="mr-2" />
                <span>02945684279</span>
              </li>
              <li className="flex items-center hover:text-purple-900 transition-colors duration-300">
                <FaEnvelope className="mr-2 " />
                <a href="mailto:info@healthcare.com" className="hover:text-purple-900 transition-colors duration-300">
                  info@healthcare.com
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>1234 Health St, Medical City, ST 12345</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Disclaimer</h3>
            <p className="text-sm">
              The information provided on this website is for general informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-400 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} HealthCare Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;