import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast'; // Importing toast and Toaster
import PatientNavbar from "../../../layout/userLayout/PatientNavbar";
import contactImage from "../../../../src/assets/Images/Contact Us.png";
import { sendMessage } from "../../../utils/userApi";
import Footer from '../../../layout/userLayout/footer';
import { z } from 'zod';

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

const ContactUs: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validate form data using Zod
    const validationResult = contactSchema.safeParse({ name, email, message });
    
    if (!validationResult.success) {
      const zodErrors = validationResult.error.format();
      setErrors({
        name: zodErrors.name?._errors[0],
        email: zodErrors.email?._errors[0],
        message: zodErrors.message?._errors[0],
      });
      toast.error("Please correct the errors in the form."); // Error toast
      return;
    }

    setErrors({});
    
    try {
      await sendMessage(name, email, message);
      toast.success('Message sent successfully!'); // Success toast
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.'); // Error toast
    }
  };

  return (
    <div>
      <Toaster /> {/* Place Toaster here */}
      <PatientNavbar />
      <div className="p-4 mb-4">
        <img
          src={contactImage}
          alt="Contact Us"
          className="w-full h-auto object-cover rounded-lg mb-6"
        />
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8">
          <div className="lg:w-1/2 lg:ml-20">
            <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
            <p className="mb-2">1234 Health St.</p>
            <p className="mb-2">Medical City,, ST 12345</p>
            <p className="mb-2">Phone: 02945684279</p>
            <p className="mb-2">Email: <a href="mailto:contact@healthcare.com">contact@healthcare.com</a></p>
          </div>
          <div className="lg:w-1/2 lg:ml-20">
            <h2 className="text-2xl font-semibold mb-4">Leave a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`border rounded p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`border rounded p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  className={`border rounded p-2 w-full ${errors.message ? 'border-red-500' : ''}`}
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
