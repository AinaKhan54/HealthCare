import React, { useState } from 'react';
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

// Define types for patient data
interface Patient {
  name: string;
  age: string;
  disease: string;
  appointmentDate: string;
  doctorName: string;
}

const AllPatientDetails: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<Patient>({
    name: '',
    age: '',
    disease: '',
    appointmentDate: '',
    doctorName: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  const handleClickOpen = (patient: Patient) => {
    setEditData(patient);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Logic to save the edited data
    setOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const patients: Patient[] = [
    { name: 'Vikas', age: '24', disease: 'Fever', appointmentDate: '1/08/2024', doctorName: 'Ameta' },
    { name: 'Vinay', age: '26', disease: 'Cough', appointmentDate: '2/09/2024', doctorName: 'Dr. Mehta' },
    { name: 'Anjali', age: '22', disease: 'Fever', appointmentDate: '15/09/2024', doctorName: 'Dr. Mehta' }
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery) ||
    patient.age.includes(searchQuery) ||
    patient.disease.toLowerCase().includes(searchQuery) ||
    patient.appointmentDate.includes(searchQuery) ||
    patient.doctorName.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="flex flex-col h-screen p-10 bg-gray-300">
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
            <TableRow sx={{ backgroundColor: 'purple' }}> {/* Apply purple background color */}
              <TableCell sx={{ color: 'white', width: '15%' }}>Name</TableCell> {/* White text color */}
              <TableCell sx={{ color: 'white', width: '15%' }}>Age</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Disease</TableCell>
              <TableCell sx={{ color: 'white', width: '22%' }}>Appointment Date</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Doctor Name</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPatients.map((patient, index) => (
              <TableRow key={index}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.disease}</TableCell>
                <TableCell>{patient.appointmentDate}</TableCell>
                <TableCell>{patient.doctorName}</TableCell>
                <TableCell>
                  <EditOutlinedIcon
                    onClick={() => handleClickOpen(patient)}
                    style={{ cursor: 'pointer', marginRight: '10px' }} // Add spacing between icons
                  />
                  <DeleteOutlineIcon style={{ cursor: 'pointer' }} />
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
              label="Name"
              type="text"
              fullWidth
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Age"
              type="text"
              fullWidth
              value={editData.age}
              onChange={(e) => setEditData({ ...editData, age: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Disease"
              type="text"
              fullWidth
              value={editData.disease}
              onChange={(e) => setEditData({ ...editData, disease: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Appointment Date"
              type="text"
              fullWidth
              value={editData.appointmentDate}
              onChange={(e) => setEditData({ ...editData, appointmentDate: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Doctor Name"
              type="text"
              fullWidth
              value={editData.doctorName}
              onChange={(e) => setEditData({ ...editData, doctorName: e.target.value })}
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
