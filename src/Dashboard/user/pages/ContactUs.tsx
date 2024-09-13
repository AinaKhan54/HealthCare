import React, { useState } from 'react';
import PatientNavbar from "../../../layout/userLayout/PatientNavbar";
import contactImage from "../../../../src/assets/Images/Contact Us.png"
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
      <div className="p-4">
        <img src={contactImage} alt="Contact Us" className="w-full h-auto object-cover rounded-lg mb-6" />
        <h2 className="text-2xl font-semibold mb-4">Leave a Message</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded p-2 w-full mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded p-2 w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            className="border rounded p-2 w-full mb-4"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
