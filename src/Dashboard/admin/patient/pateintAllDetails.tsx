import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axiosInstance from '../../../auth/axiosInstance';

// Define types for patient data
interface Patient {
  _id: string; // Added _id field for API operations
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  address: string;
  medical: string;
}

const AllPatientDetails: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]); // State for patients
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<Patient>({
    _id: '', // Added _id field
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    medical: '',
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch patients data from API
    axiosInstance.get('/patients')
      .then(response => {
        if (response.data && Array.isArray(response.data)) {
          const transformedPatients = response.data.map((patient: any) => ({
            _id: patient._id, // Ensure the _id is set for edit/delete operations
            firstname: patient.firstname,
            lastname: patient.lastname,
            email: patient.email,
            phone: patient.phone,
            dob: patient.dob,
            gender: patient.gender,
            address: patient.address,
            medical: patient.medical || 'N/A',
          }));
          setPatients(transformedPatients);
        } else {
          console.error('Unexpected response structure:', response.data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the patient data!', error);
      });
  }, []);

  const handleClickOpen = (patient: Patient) => {
    setEditData(patient);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Send PUT request to update the patient data
    axiosInstance.put(`/patients/${editData._id}`, editData)
      .then(response => {
        const updatedPatients = patients.map(patient => 
          patient._id === editData._id ? { ...editData } : patient
        );
        setPatients(updatedPatients);
        setOpen(false);
      })
      .catch(error => {
        console.error('There was an error updating the patient data!', error);
      });
  };

  const handleDelete = (id: string) => {
    // Send DELETE request to remove the patient
    axiosInstance.delete(`/patients/${id}`)
      .then(() => {
        const filteredPatients = patients.filter(patient => patient._id !== id);
        setPatients(filteredPatients);
      })
      .catch(error => {
        console.error('There was an error deleting the patient!', error);
      });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredPatients = patients.filter(patient =>
    patient.firstname.toLowerCase().includes(searchQuery) ||
    patient.lastname.toLowerCase().includes(searchQuery) ||
    patient.email.toLowerCase().includes(searchQuery) ||
    patient.phone.includes(searchQuery) ||
    patient.dob.includes(searchQuery) ||
    patient.gender.toLowerCase().includes(searchQuery) ||
    patient.address.toLowerCase().includes(searchQuery) ||
    patient.medical.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="flex flex-col h-screen ml-[250px] p-10 bg-gray-300">
      <div className="flex justify-end mb-4">
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full max-w-xs"
        />
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'purple' }}>
              <TableCell sx={{ color: 'white', width: '15%' }}>Name</TableCell>
              <TableCell sx={{ color: 'white', width: '20%' }}>Email</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Mobile Number</TableCell>
              <TableCell sx={{ color: 'white', width: '10%' }}>DOB</TableCell>
              <TableCell sx={{ color: 'white', width: '10%' }}>Gender</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Address</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Medical History</TableCell>
              <TableCell sx={{ color: 'white', width: '10%' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPatients.map((patient, index) => (
              <TableRow key={index}>
                <TableCell>{`${patient.firstname} ${patient.lastname}`}</TableCell>
                <TableCell>{patient.email}</TableCell>
                <TableCell>{patient.phone}</TableCell>
                <TableCell>{patient.dob}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.address}</TableCell>
                <TableCell>{patient.medical}</TableCell>
                <TableCell>
                  <EditOutlinedIcon
                    onClick={() => handleClickOpen(patient)}
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                  />
                  <DeleteOutlineIcon
                    onClick={() => handleDelete(patient._id)}
                    style={{ cursor: 'pointer' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Details</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="First Name"
              type="text"
              fullWidth
              value={editData.firstname}
              onChange={(e) => setEditData({ ...editData, firstname: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Last Name"
              type="text"
              fullWidth
              value={editData.lastname}
              onChange={(e) => setEditData({ ...editData, lastname: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              value={editData.email}
              onChange={(e) => setEditData({ ...editData, email: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Mobile Number"
              type="text"
              fullWidth
              value={editData.phone}
              onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
            />
            <TextField
              margin="dense"
              label="DOB"
              type="text"
              fullWidth
              value={editData.dob}
              onChange={(e) => setEditData({ ...editData, dob: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Gender"
              type="text"
              fullWidth
              value={editData.gender}
              onChange={(e) => setEditData({ ...editData, gender: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Address"
              type="text"
              fullWidth
              value={editData.address}
              onChange={(e) => setEditData({ ...editData, address: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Medical History"
              type="text"
              fullWidth
              value={editData.medical}
              onChange={(e) => setEditData({ ...editData, medical: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </TableContainer>
    </div>
  );
};

export default AllPatientDetails;