import React, { useEffect, useState } from 'react';
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
import { getPatients, getAppointments } from '../../../utils/userApi';

interface Patient {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
}

interface Appointment {
  name: string;
  email: string;
  mobileNumber: string;
  adharNo: string;
  gender: string;
  date: string;
  time: string;
  reason: string;
}

interface Doctor {
  name: string;
  specialization: string;
}

interface CardProps {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  content?: string;
  color: string;
  width: string;
  patients?: Patient[];
  doctors?: Doctor[];
}

const Card: React.FC<CardProps> = ({ icon, title, content, color, width, patients }) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg ${color} ${width} flex flex-col items-center`}>
      <div className="bg-white/30 p-4 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <p className="text-lg font-medium text-gray-600 mb-2">{title}</p>
      {content && <h2 className="text-4xl font-semibold text-gray-800">{content}</h2>}

      {patients && (
        <div className="w-full">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2">Name</th>
                <th className="py-2">Phone</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-2">{`${patient.firstname} ${patient.lastname}`}</td>
                  <td className="py-2">{patient.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const Home: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsData = await getPatients();
        setPatients(patientsData);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    const fetchAppointments = async () => {
      try {
        const appointmentsData = await getAppointments();
        setAppointments(appointmentsData);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchPatients();
    fetchAppointments();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

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
    <div className="p-12 bg-gray-100 ml-40 mt-[-60px]">
      <div className="p-12 ml-12 flex justify-between w-full gap-4">
        <Card 
          icon={<PeopleIcon className="text-white text-5xl" />} 
          title="Total Admit Patients" 
          content={patients.length.toString()} 
          color="bg-[#E5D1FA]" 
          width="w-64"
        />
        <Card 
          icon={<FemaleIcon className="text-white text-5xl" />} 
          title="Total Doctors" 
          content={doctors.length.toString()}  
          color="bg-[#FAD1E6]" 
          width="w-64"
        />
        <Card 
          icon={<PeopleIcon className="text-white text-5xl" />} 
          title="Total Appointments" 
          content={appointments.length.toString()}
          color="bg-[#fbb3b3]" 
          width="w-64"
        />
        <Card 
          icon={<MedicalServicesIcon className="text-white text-5xl" />} 
          title="Total Messages" 
          content="8"
          color="bg-[#9CC2F4]" 
          width="w-64"
        />
      </div>

      <div className="flex justify-between ml-20 mb-8">
        {/* Patients Overview Card */}
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

        {/* Recent Patients Details Card */}
        <div className="ml-4"> {/* Adjust margin as needed */}
          <Card 
            icon={<PeopleIcon className="text-white text-5xl" />} 
            title={
              <div className="text-2xl" style={{ marginTop: 'px' }}>
                Recent Patients Details
              </div>
            } 
            patients={patients.slice(0, 5)} 
            color="bg-[#e8ddeb]"  
            width="w-80" 
          />
        </div>
      </div>

      <div className="flex gap-1 ml-20 mb-8">
        <LongCard 
          icon={<MedicalServicesIcon className="text-white text-2xl" />} 
          title="Our Specialized Team" 
          content="Top Doctors" 
          color="bg-[#C2E5F5]" 
          width="w-[74rem]" 
          height="h-[20rem]"
          images={[doctor1, doctor2, doctor3, doctor4, doctor5, doctor6, doctor7]} 
          doctors={doctors} 
        />
      </div>

      <div className="bg-white p-5 ml-20 rounded-lg shadow-lg">
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
        <th className="py-2 px-4 border">Reason</th>
      </tr>
    </thead>
    <tbody>
      {appointments.length > 0 ? (
        <tr key={0} className="border-b border-gray-200">
          <td className="py-2 px-4">{appointments[0].name}</td>
          <td className="py-2 px-4">{appointments[0].mobileNumber}</td>
          <td className="py-2 px-4">{appointments[0].adharNo}</td>
          <td className="py-2 px-4">{appointments[0].gender}</td>
          <td className="py-2 px-4">{formatDate(appointments[0].date)}</td>
          <td className="py-2 px-4">{appointments[0].time}</td>
          <td className="py-2 px-4">{appointments[0].reason}</td>
        </tr>
      ) : (
        <tr>
          <td colSpan={7} className="py-2 px-4 text-center">No appointments available.</td>
        </tr>
      )}
    </tbody>
  </table>
</div>


    </div>
  );
};

export default Home;
