import React, { useState } from 'react';
import PatientNavbar from "../../../layout/userLayout/PatientNavbar";
import contactImage from "../../../../src/assets/Images/Contact Us.png";
import { sendMessage } from "../../../utils/userApi";

const ContactUs: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await sendMessage(name, email, message);
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <PatientNavbar />
      <div className="p-4 mb-4">
        {/* Image */}
        <img
          src={contactImage}
          alt="Contact Us"
          className="w-full h-auto object-cover rounded-lg mb-6"
        />
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8">
          {/* Address Section */}
          <div className="lg:w-1/2 lg:ml-20">
            <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
            <p className="mb-2">1234 Health St.</p>
            <p className="mb-2">Wellness City, ST 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-2">Email: contact@healthcare.com</p>
          </div>
          {/* Message Form Section */}
          <div className="lg:w-1/2 lg:ml-20">
            <h2 className="text-2xl font-semibold mb-4">Leave a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded p-2 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded p-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Your Message"
                className="border rounded p-2 w-full"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="bg-purple-500 text-white p-2 rounded hover:bg-purple-700 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
