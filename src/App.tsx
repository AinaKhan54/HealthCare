import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './layout/adminLayout/sidebar';
import Home from './Dashboard/admin/Pages/home';
import Navbar from './layout/adminLayout/navbar';
import Doctors from './Dashboard/admin/Pages/doctor';
import Appointment from './Dashboard/admin/Pages/appointment';
import Login from './authLayout/Login/Login';
import Signup from './authLayout/Signup/Signup';
import AllPatientDetails from './Dashboard/admin/patient/pateintAllDetails';
import ErrorBoundary from './Components/ErrorBoundaries/ErrorBoundaries';
import DoctorSchedule from './Dashboard/admin/doctor/doctorschedule';
import PatientDashboard from './Dashboard/user/pages/PatientDashboard';
import MedicalExperts from './Dashboard/user/pages/MedicalExpert';
import ContactUs from './Dashboard/user/pages/ContactUs';
import AllDoctorDetails from './Dashboard/admin/doctor/AllDoctor';
import MakeAppointment from './Dashboard/user/pages/MakeAppointment';
import AddDoctor from './Dashboard/admin/doctor/AddDoctor';
import Messages from './Dashboard/admin/messagesModel/messages';
import HealthBlog from './Dashboard/user/pages/HealthBlog';
import HealthyLifeStyle from './Dashboard/user/HealthBlog/HealthyLifeStyle';
import VitaminD from './Dashboard/user/HealthBlog/VitaminD';
import QuitSmoking from './Dashboard/user/HealthBlog/QuitSmoking';
import Kidneys from './Dashboard/user/HealthBlog/Kidneys';
import ChildObesity from './Dashboard/user/HealthBlog/ChildhoodObesity';
import BloodSugar from './Dashboard/user/HealthBlog/BloodSugar';
import About from './Dashboard/user/pages/About';
import PatientProfilePage from './Dashboard/user/pages/PatientProfile';
import AccidentEmergency from './Dashboard/user/Department/Accident-Emergency';
import GeneralMedicine from './Dashboard/user/Department/GeneralMedicine';
import Dermatology from './Dashboard/user/Department/Dermatology';
import Radiology from './Dashboard/user/Department/Radiology';
import ObstetricsGynecology from './Dashboard/user/Department/Obstetrics-Gynecology';
import Pediatries from './Dashboard/user/Department/Pediatries';
import Anesthesiology from './Dashboard/user/Department/Anesthesiology';
import GeneralSurgery from './Dashboard/user/Department/GeneralSurgery';
import IntensiveCareUnit from './Dashboard/user/Department/IntensiveCareUnit';
import InternalMedicine from './Dashboard/user/Department/InternalMedicine';
import Pathology from './Dashboard/user/Department/Pathology';
import Pharmacy from './Dashboard/user/Department/Pharmacy';
interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();
  const hideNavbarAndSidebar = location.pathname === '/login' || 
    location.pathname === '/signup' || 
    location.pathname === '/patientDashboard' || 
    location.pathname === '/Patient/MedicalExpert' || 
    location.pathname === "/Patient/ContactUs" ||
    location.pathname === "/MakeAppointment" ||
    location.pathname === "/HealthBlog" ||
    location.pathname === "/HealthyLifeStyle"||
    location.pathname === "/Vitamin-D"||
    location.pathname === "/QuitSmoking" ||
    location.pathname === "/Kidneys" ||
    location.pathname === "/Childhood-Obesity" ||
    location.pathname === "/BloodSugar" ||
    location.pathname === "/About" ||
    location.pathname === "/patient-profile" ||
    location.pathname === "/accident-emergency" ||
    location.pathname === "/general-medicine" ||
    location.pathname === "/dermatology" ||
    location.pathname === "/radiology" ||
    location.pathname === "/obstetrics-gynecology" ||
    location.pathname === "/pediatries" ||
    location.pathname === "/critical-care&anesthesiology" ||
    location.pathname === "/surgical-department" ||
    location.pathname === "/intensive-care-unit" ||
    location.pathname === "/internal-medicine" ||
    location.pathname === "/pathology"||
    location.pathname === "/pharmacy";

  return (
    <>
      {!hideNavbarAndSidebar && <Navbar />}
      <div className="flex" style={{ minHeight: '100vh' }}>
        {!hideNavbarAndSidebar && <Sidebar />}
        <div className="flex-grow">
          {children}
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <AppLayout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/patientDashboard" element={<PatientDashboard />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/patients/AllDetails" element={<AllPatientDetails />} />
            <Route path="/doctor/doctorschedule" element={<DoctorSchedule />} />
            <Route path="/Patient/MedicalExpert" element={<MedicalExperts />} />
            <Route path="/Patient/ContactUs" element={<ContactUs />} />
            <Route path="/AllDoctor" element={<AllDoctorDetails />} />
            <Route path="/AddDoctor" element={<AddDoctor />} />
            <Route path="/MakeAppointment" element={<MakeAppointment />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/HealthBlog" element={<HealthBlog />} />
            <Route path="/HealthyLifeStyle" element={<HealthyLifeStyle />} />
            <Route path="/Vitamin-D" element={<VitaminD />} />
            <Route path="/QuitSmoking" element={<QuitSmoking />} />
            <Route path="/Kidneys" element={<Kidneys />} />
            <Route path="/Childhood-Obesity" element={<ChildObesity />} />
            <Route path="/BloodSugar" element={<BloodSugar />} />
            <Route path="/About" element={<About />} />
            <Route path="/patient-profile" element={<PatientProfilePage />} />
            <Route path="/accident-emergency" element={<AccidentEmergency />} />
            <Route path="/general-medicine" element={<GeneralMedicine />} />
            <Route path="/dermatology" element={<Dermatology />} />
            <Route path="/radiology" element={<Radiology />} />
            <Route path="/obstetrics-gynecology" element={<ObstetricsGynecology />} />
            <Route path="/pediatries" element={<Pediatries />} />
            <Route path="/critical-care&anesthesiology" element={<Anesthesiology />} />
            <Route path="/surgical-department" element={<GeneralSurgery />} />
            <Route path="/intensive-care-unit" element={<IntensiveCareUnit />} />
            <Route path="/internal-medicine" element={<InternalMedicine />} />
            <Route path="/pathology" element={<Pathology />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
          </Routes>
        </AppLayout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;