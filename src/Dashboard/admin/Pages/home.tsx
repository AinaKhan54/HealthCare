import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import FemaleIcon from '@mui/icons-material/Female';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import LongCard from '../../../Components/CardComponent/LongCard';
import doctor1 from '../../../assets/Images/doctor1.jpg';
import doctor2 from '../../../assets/Images/doctor2.jpg';
import doctor3 from '../../../assets/Images/doctor3.jpg';
import doctor4 from '../../../assets/Images/doctor4.jpg';
import doctor5 from '../../../assets/Images/doctor5.jpg';
import doctor6 from '../../../assets/Images/doctor6.jpg';
import doctor7 from '../../../assets/Images/doctor7.jpg';

interface Patient {
  name: string;
  age: number;
  status: string;
}

interface Appointment {
  name: string;
  mobile: string;
  aadhar: string;
  gender: string;
  date: string;
  time: string;
  status: string;
  action: string;
}

interface Doctor {
  name: string;
  specialization: string;
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  content?: string;
  color: string;
  width: string;
  patients?: Patient[];
}

const Home: React.FC = () => {
  const data = [
    { month: 'Jan', health: 400, death: 240 },
    { month: 'Feb', health: 300, death: 139 },
    { month: 'Mar', health: 500, death: 221 },
    { month: 'Apr', health: 478, death: 200 },
    { month: 'May', health: 589, death: 218 },
    { month: 'Jun', health: 439, death: 250 },
    { month: 'Jul', health: 349, death: 210 },
    { month: 'Aug', health: 400, death: 240 },
    { month: 'Sep', health: 500, death: 220 },
  ];

  const patients: Patient[] = [
    { name: 'Jordan Nt', age: 41, status: 'Recovered' },
    { name: 'Angela Nurhayati', age: 41, status: 'New Patient' },
    { name: 'Thomas Jaja', age: 28, status: 'On Recovery' },
    { name: 'Jordan Nt', age: 20, status: 'Treatment' },
    { name: 'Jordan Nt', age: 30, status: 'On Recovery' },
  ];

  const appointments: Appointment[] = [
    { name: 'John Doe', mobile: '123-456-7890', aadhar: '1234-5678-9012', gender: 'Male', date: '2024-08-28', time: '10:00 AM', status: 'Confirmed', action: 'View' },
    { name: 'Jane Smith', mobile: '234-567-8901', aadhar: '2345-6789-0123', gender: 'Female', date: '2024-08-28', time: '11:00 AM', status: 'Pending', action: 'View' },
    { name: 'Alice Johnson', mobile: '345-678-9012', aadhar: '3456-7890-1234', gender: 'Female', date: '2024-08-28', time: '12:00 PM', status: 'Cancelled', action: 'View' },
    // Add more appointment data as needed
  ];

  const doctors: Doctor[] = [
    { name: 'Dr. John Smith', specialization: 'Cardiologist' },
    { name: 'Dr. Jane Doe', specialization: 'Neurologist' },
    { name: 'Dr. Michael Brown', specialization: 'Orthopedic' },
    { name: 'Dr. Sarah Johnson', specialization: 'Pediatrician' },
    { name: 'Dr. Emily Davis', specialization: 'Dermatologist' },
    { name: 'Dr. William Wilson', specialization: 'Surgeon' },
    { name: 'Dr. Olivia Martinez', specialization: 'Gynecologist' },
  ];

  return (
    <div className="p-32 bg-gray-100 ml-40 mt-[-80px]">
      <div className="flex justify-between w-full mb-8">
        <Card 
          icon={<PeopleIcon className="text-white text-5xl" />} 
          title="Today's Patients Visitors" 
          content="5600" 
          color="bg-[#E5D1FA]" 
          width="w-64"
        />
        <Card 
          icon={<FemaleIcon className="text-white text-5xl" />} 
          title="Appointments" 
          content="3450" 
          color="bg-[#FAD1E6]" 
          width="w-64"
        />
        <Card 
          icon={<PeopleIcon className="text-white text-5xl" />} 
          title="Total Admit Patients" 
          content="3500" 
          color="bg-[#fbb3b3]" 
          width="w-64"
        />
        <Card 
          icon={<MedicalServicesIcon className="text-white text-5xl" />} 
          title="Today's Profit" 
          content="95k" 
          color="bg-[#9CC2F4]" 
          width="w-64"
        />
      </div>

      <div className="flex justify-between gap-4 mb-8">
        <div className="flex-1 bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Patients Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="health" stroke="#8884d8" fill="#8884d8" />
              <Line type="monotone" dataKey="death" stroke="#ff6f61" fill="#ff6f61" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <Card 
          icon={<MedicalServicesIcon className="text-white text-5xl" />} 
          title="Recent Patients" 
          patients={patients} 
          color="bg-white" 
          width="w-80"
        />
      </div>

      <div className="flex gap-1 mb-3">
        <LongCard 
          icon={<MedicalServicesIcon className="text-white text-2xl" />} 
          title="Our Specialized Team" 
          content="Top Doctors" 
          color="bg-[#C2E5F5]" 
          width="w-[74rem]" 
          height="h-[20rem]"
          images={[doctor1, doctor2, doctor3, doctor4, doctor5, doctor6, doctor7]} // Pass images as an array
          doctors={doctors} // Pass doctors info
        />
      </div>

      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Today's Patient Appointments</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 border">Patient Name</th>
              <th className="py-2 px-4 border">Mobile</th>
              <th className="py-2 px-4 border">Aadhar Number</th>
              <th className="py-2 px-4 border">Gender</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Time</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{appointment.name}</td>
                <td className="py-2 px-4">{appointment.mobile}</td>
                <td className="py-2 px-4">{appointment.aadhar}</td>
                <td className="py-2 px-4">{appointment.gender}</td>
                <td className="py-2 px-4">{appointment.date}</td>
                <td className="py-2 px-4">{appointment.time}</td>
                <td className="py-2 px-4">{appointment.status}</td>
                <td className="py-2 px-4 text-blue-500 hover:underline cursor-pointer">
                  {appointment.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ icon, title, content, color, width, patients }) => {
  return (
    <div className={`p-5 rounded-lg shadow-lg ${color} ${width}`}>
      <div className="flex items-center mb-4">
        <div className="bg-white/30 p-2 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div className="ml-4 text-gray-800 mb-2">
          <p className="text-lg font-semibold m-0">{title}</p>
          {content && <h2 className="text-3xl font-semibold m-0">{content}</h2>}
        </div>
      </div>

      {patients && (
        <div className="w-full">
          <h3 className="text-lg font-weight-300 mb-5">{title}</h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index} className="border-t">
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
