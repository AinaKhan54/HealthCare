import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import ProtectedRoute from "./auth/ProtectedRoutes"; // Adjust the path as needed
import PatientRegistrationForm from './Dashboard/admin/patient/patientAdd';
import DoctorProfile from './Dashboard/user/MedicalExpertsProfiles/doctor1';
import DoctorDermatology from './Dashboard/user/MedicalExpertsProfiles/doctor2';
import DoctorRadiology from './Dashboard/user/MedicalExpertsProfiles/doctor3';
import DoctorObstetricsGynecology from './Dashboard/user/MedicalExpertsProfiles/doctor4';
import DoctorAnesthesiology from './Dashboard/user/MedicalExpertsProfiles/doctor1';
import { RootState } from './store';
interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();
  const auth = useSelector((state: RootState) => state.auth.isAuthenticated);

  // Determine if the route is for the admin area
  const isAdminRoute = location.pathname.startsWith('/admin');

  // // Redirect if necessary
  // if (isAdminRoute && !auth) {
  //   return <Navigate to="/login" replace />;
  // } else if (!isAdminRoute && auth && location.pathname === '/') {
  //   // Redirect authenticated users to /admin/home-page if they try to access the root
  //   return <Navigate to="/admin/home-page" replace />;
  // }

  const hideNavbarAndSidebar = 
    location.pathname === '/login' || 
    location.pathname === '/signup' || 
    location.pathname === '/home' || 
    location.pathname === '/medical-expert' || 
    location.pathname === "/ContactUs" ||
    location.pathname === "/make-appointment" ||
    location.pathname === "/health-blog" ||
    location.pathname === "/health-blog/healthy-lifestyle" ||
    location.pathname === "/health-blog/vitamin-d" ||
    location.pathname === "/health-blog/quit-smoking" ||
    location.pathname === "/health-blog/kidneys" ||
    location.pathname === "/health-blog/childhood-obesity" ||
    location.pathname === "/health-blog/blood-sugar" ||
    location.pathname === "/about" ||
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
    location.pathname === "/pathology" ||
    location.pathname === "/pharmacy" ||
    location.pathname === "/doctor1" ||
    location.pathname === "/doctor/dermatology"||
    location.pathname === "/doctor/radiology"||
    location.pathname === "/doctor/obstetrics-gynecology"||
    location.pathname === "/doctor/anesthesiology";

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
          <Route path="/" element={<Navigate to="/home" replace />} />
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<PatientDashboard />} />
            <Route path="/medical-expert" element={<MedicalExperts />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/make-appointment" element={<MakeAppointment />} />
            <Route path="/health-blog" element={<HealthBlog />} />
            <Route path="/health-blog/healthy-lifestyle" element={<HealthyLifeStyle />} />
            <Route path="/health-blog/vitamin-d" element={<VitaminD />} />
            <Route path="/health-blog/quit-smoking" element={<QuitSmoking />} />
            <Route path="/health-blog/kidneys" element={<Kidneys />} />
            <Route path="/health-blog/childhood-obesity" element={<ChildObesity />} />
            <Route path="/health-blog/blood-sugar" element={<BloodSugar />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin/add-patients" element={<PatientRegistrationForm />} />
            <Route path="/admin/doctor/add-Doctor" element={<AddDoctor />} />
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
            <Route path="/doctor1" element={<DoctorProfile />} />
            <Route path="/doctor/dermatology" element={<DoctorDermatology/>} />
            <Route path="/doctor/radiology" element={<DoctorRadiology/>} />
            <Route path="/doctor/obstetrics-gynecology" element={<DoctorObstetricsGynecology/>} />
            <Route path="/doctor/anesthesiology" element={<DoctorAnesthesiology/>} />
            <Route path="/admin/home-page" element={<Home />} />
              <Route path="/admin/doctors" element={<Doctors />} />
              <Route path="/admin/appointment" element={<Appointment />} />
              <Route path="/admin/patients-all-details" element={<AllPatientDetails />} />
              <Route path="/admin/doctor/doctor-schedule" element={<DoctorSchedule />} />
              <Route path="/admin/doctor/doctor-all-doctor" element={<AllDoctorDetails />} />
              <Route path="/admin/messages" element={<Messages />} />
            
            

            {/* Protected Routes */}
            {/* <Route element={<ProtectedRoute />}>
              <Route path="/admin/home-page" element={<Home />} />
              <Route path="/admin/doctors" element={<Doctors />} />
              <Route path="/admin/appointment" element={<Appointment />} />
              <Route path="/admin/patients-all-details" element={<AllPatientDetails />} />
              <Route path="/admin/doctor/doctor-schedule" element={<DoctorSchedule />} />
              <Route path="/admin/doctor/doctor-all-doctor" element={<AllDoctorDetails />} />
              <Route path="/admin/messages" element={<Messages />} />
            </Route> */}
          </Routes>
        </AppLayout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
