import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast'; // Importing toast
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Tooltip, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axiosInstance from '../../../auth/axiosInstance';

// Define types for patient data
interface Patient {
  _id: string;
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
  const [patients, setPatients] = useState<Patient[]>([]);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<Patient>({
    _id: '',
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
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [patientToDelete, setPatientToDelete] = useState<string | null>(null);

  useEffect(() => {
    axiosInstance.get('/patients')
      .then(response => {
        if (response.data && Array.isArray(response.data)) {
          const transformedPatients = response.data.map((patient: any) => ({
            _id: patient._id,
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
        console.error('Error fetching the patient data!', error);
      });
  }, []);

  const handleClickOpen = (patient: Patient) => {
    setEditData(patient);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      await axiosInstance.put(`/patients/${editData._id}`, editData);
      const updatedPatients = patients.map(patient => 
        patient._id === editData._id ? { ...editData } : patient
      );
      setPatients(updatedPatients);
      toast.success('Patient information updated successfully!'); // Success toast
    } catch (error) {
      console.error('Error updating patient data!', error);
      toast.error('Error updating patient information.'); // Error toast
    } finally {
      setOpen(false);
    }
  };

  const confirmDelete = (id: string) => {
    setPatientToDelete(id);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    if (patientToDelete) {
      axiosInstance.delete(`/patients/${patientToDelete}`)
        .then(() => {
          const filteredPatients = patients.filter(patient => patient._id !== patientToDelete);
          setPatients(filteredPatients);
          toast.success('Patient deleted successfully!'); // Success toast
        })
        .catch(error => {
          console.error('Error deleting the patient!', error);
          toast.error('Error deleting the patient.'); // Error toast
        })
        .finally(() => {
          setConfirmOpen(false);
          setPatientToDelete(null);
        });
    }
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
      <Toaster /> {/* Toaster component for notifications */}
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
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>
                Name
              </TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>
                Email
              </TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>
                Mobile Number
              </TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>
                DOB
              </TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>
                Gender
              </TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>
                Address
              </TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>
                Medical History
              </TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredPatients.map((patient, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:hover': { backgroundColor: '#f5f5f5' },
                  '& td': { textAlign: 'center', padding: '12px' },
                }}
              >
                <TableCell>{`${patient.firstname} ${patient.lastname}`}</TableCell>
                <TableCell>{patient.email}</TableCell>
                <TableCell>{patient.phone}</TableCell>
                <TableCell>{patient.dob}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.address}</TableCell>
                <TableCell>{patient.medical}</TableCell>
                <TableCell>
                  <Tooltip title="Delete">
                    <DeleteOutlineIcon
                      onClick={() => confirmDelete(patient._id)}
                      className="cursor-pointer mr-2 transform transition-transform duration-200 hover:scale-110"
                      sx={{ color: 'red' }}
                    />
                  </Tooltip>
                  <Tooltip title="Edit">
                    <EditOutlinedIcon
                      onClick={() => handleClickOpen(patient)}
                      className="cursor-pointer transform transition-transform duration-200 hover:scale-110"
                      sx={{ color: 'blue' }}
                    />
                  </Tooltip>
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
            <Button onClick={handleClose} variant="contained" sx={{ backgroundColor: '#FF4C4C', color: 'white' }} >
              Cancel
            </Button>
            <Button onClick={handleSave} variant="contained" sx={{ backgroundColor: '#4CAF50', color: 'white' }}> 
              Save
            </Button>
          </DialogActions>
        </Dialog>

        {/* Confirmation Dialog */}
        <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <p>Are you sure you want to delete this patient?</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmOpen(false)} variant="contained" sx={{ backgroundColor: '#FF4C4C', color: 'white' }}>
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} variant="contained" sx={{ backgroundColor: '#4CAF50', color: 'white' }}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </TableContainer>
    </div>
  );
};

export default AllPatientDetails;
