// import React, { useState, ChangeEvent, FormEvent } from 'react';

// interface Address {
//   street: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country: string;
// }

// interface MedicalHistory {
//   anemia: boolean;
//   asthma: boolean;
//   bronchitis: boolean;
//   chickenpox: boolean;
// }

// interface FormData {
//   firstname: string;
//   lastname: string;
//   gender: string;
//   phone: string;
//   email: string;
//   dob: string;
//   maritalStatus: string;
//   address: Address;
//   medicalHistory: MedicalHistory;
// }

// const PatientRegistrationForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstname: '',
//     lastname: '',
//     gender: '',
//     phone: '',
//     email: '',
//     dob: '',
//     maritalStatus: '',
//     address: {
//       street: '',
//       city: '',
//       state: '',
//       postalCode: '',
//       country: ''
//     },
//     medicalHistory: {
//       anemia: false,
//       asthma: false,
//       bronchitis: false,
//       chickenpox: false,
//     },
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;

//     if (type === 'checkbox') {
//       setFormData({
//         ...formData,
//         medicalHistory: {
//           ...formData.medicalHistory,
//           [name]: checked,
//         },
//       });
//     } else if (name in formData.address) {
//       setFormData({
//         ...formData,
//         address: {
//           ...formData.address,
//           [name]: value,
//         },
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle form submission (e.g., send data to a server)
//     console.log('Form Data:', formData);
//   };

//   return (
//     <div className="max-w-3xl mx-auto" style={{ marginTop: '-50px' }}>
//       <h2 className="text-2xl font-bold mb-6 text-glow text-fourth text-center">Patient Registration Form</h2>
//       <div className="p-6 bg-white shadow-md rounded-lg">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4 flex space-x-4">
//             <div className="flex-1">
//               <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="firstname"
//                 name="firstname"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="lastname"
//                 name="lastname"
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-4 flex space-x-4">
//             <div className="flex-1">
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               id="dob"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
//               Gender
//             </label>
//             <div className="mt-1">
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="male"
//                   checked={formData.gender === 'male'}
//                   onChange={handleChange}
//                   className="mr-2"
//                 />
//                 Male
//               </label>
//               <label className="ml-4">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="female"
//                   checked={formData.gender === 'female'}
//                   onChange={handleChange}
//                   className="mr-2"
//                 />
//                 Female
//               </label>
//             </div>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">
//               Marital Status
//             </label>
//             <div className="mt-1">
//               <label>
//                 <input
//                   type="radio"
//                   name="maritalStatus"
//                   value="single"
//                   checked={formData.maritalStatus === 'single'}
//                   onChange={handleChange}
//                   className="mr-2"
//                 />
//                 Single
//               </label>
//               <label className="ml-4">
//                 <input
//                   type="radio"
//                   name="maritalStatus"
//                   value="married"
//                   checked={formData.maritalStatus === 'married'}
//                   onChange={handleChange}
//                   className="mr-2"
//                 />
//                 Married
//               </label>
//               <label className="ml-4">
//                 <input
//                   type="radio"
//                   name="maritalStatus"
//                   value="divorced"
//                   checked={formData.maritalStatus === 'divorced'}
//                   onChange={handleChange}
//                   className="mr-2"
//                 />
//                 Divorced
//               </label>
//               <label className="ml-4">
//                 <input
//                   type="radio"
//                   name="maritalStatus"
//                   value="widow"
//                   checked={formData.maritalStatus === 'widow'}
//                   onChange={handleChange}
//                   className="mr-2"
//                 />
//                 Widow
//               </label>
//             </div>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="street" className="block text-sm font-medium text-gray-700">
//               Street Address
//             </label>
//             <input
//               type="text"
//               id="street"
//               name="street"
//               value={formData.address.street}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//               required
//             />
//           </div>

//           <div className="mb-4 flex space-x-4">
//             <div className="flex-1">
//               <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//                 City
//               </label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 value={formData.address.city}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//                 required
//               />
//             </div>

//             <div className="flex-1">
//               <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//                 State
//               </label>
//               <input
//                 type="text"
//                 id="state"
//                 name="state"
//                 value={formData.address.state}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-4 flex space-x-4">
//             <div className="flex-1">
//               <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
//                 Postal/Zip Code
//               </label>
//               <input
//                 type="text"
//                 id="postalCode"
//                 name="postalCode"
//                 value={formData.address.postalCode}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//                 required
//               />
//             </div>

//             <div className="flex-1">
//               <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//                 Country
//               </label>
//               <input
//                 type="text"
//                 id="country"
//                 name="country"
//                 value={formData.address.country}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//                 required
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PatientRegistrationForm;
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      Contact
    </div>
  );
};

export default Contact;
