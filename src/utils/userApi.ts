import axiosInstance from '../auth/axiosInstance';
import { Appointment } from '../Dashboard/user/pages/MakeAppointment';
import { MessageData } from '../Dashboard/admin/messagesModel/messages';
import { AppointmentData } from '../Dashboard/admin/Pages/appointment'; 
import { DoctorData } from '../Dashboard/admin/doctor/AddDoctor';
import { PatientsFormData } from '../Dashboard/admin/patient/patientAdd';

// Base API URL
const API_URL = 'http://localhost:5000/api';

// Login User
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/users/login`, { email, password });
    const token = response.data.token;
    if (token) {
      localStorage.setItem('token', token);
    }
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Signup User
export const signupUser = async (email: string, password: string, username: string) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/users/register`, { email, password, username });
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

// Get User Profile
export const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}/users/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

// Create Appointment
export const createAppointment = async (appointmentData: Appointment) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/appointments/create`, appointmentData);
    return response.data;
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
};

// Get All Appointments
export const getAppointments = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}/appointments`);
    return response.data;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    throw error;
  }
};

// Delete Appointment
export const deleteAppointment = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`${API_URL}/appointments/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting appointment:', error);
    throw error;
  }
};

// Update Appointment
export const updateAppointment = async (id: string, updatedAppointment: AppointmentData) => {
  try {
    const response = await axiosInstance.put(`${API_URL}/appointments/${id}`, updatedAppointment);
    return response.data;
  } catch (error) {
    console.error('Error updating appointment:', error);
    throw error;
  }
};

// Send Message
export const sendMessage = async (name: string, email: string, message: string) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/messages/create-message`, { name, email, message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};
// Fetch Messages
export const fetchMessages = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}/messages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};

// Delete Message
export const deleteMessage = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`${API_URL}/messages/messages/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting message:', error);
    throw error;
  }
};

// Update Message
export const updateMessage = async (id: string, updatedMessage: MessageData) => {
  try {
    const response = await axiosInstance.put(`${API_URL}/messages/messages/${id}`, updatedMessage);
    return response.data;
  } catch (error) {
    console.error('Error updating message:', error);
    throw error;
  }
};

// Create Doctor
export const createDoctor = async (doctorData: DoctorData) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/doctors/create`, doctorData);
    return response.data;
  } catch (error) {
    console.error('Error creating doctor:', error);
    throw error;
  }
};

// Get All Doctors
export const getDoctors = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}/doctors`);
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

// Delete Doctor
export const deleteDoctor = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`${API_URL}/doctors/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting doctor:', error);
    throw error;
  }
};

// Update Doctor
export const updateDoctor = async (id: string, updatedDoctor: DoctorData) => {
  try { 
    const response = await axiosInstance.put(`${API_URL}/doctors/${id}`, updatedDoctor);
    return response.data;
  } catch (error) {
    console.error('Error updating doctor:', error);
    throw error;
  }
};


// Create Patient
export const createPatient = async (patientData: PatientsFormData) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/patients/create`, patientData);
    return response.data;
  } catch (error) {
    console.error('Error creating patients:', error);
    throw error;
  }
};

// Get All Patients
export const getPatients = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}/patients`);
    return response.data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};

// Delete Patient
export const deletePatient = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`${API_URL}/patients/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting patient:', error);
    throw error;
  }
};

// Update Patient
export const updatePatient = async (id: string, updatedPatient: FormData) => {
  try {
    const response = await axiosInstance.put(`${API_URL}/patients/${id}`, updatedPatient);
    return response.data;
  } catch (error) {
    console.error('Error updating patient:', error);
    throw error;
  }
};

