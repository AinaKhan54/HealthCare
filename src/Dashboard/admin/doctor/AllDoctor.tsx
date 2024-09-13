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
import axios from 'axios';

// Define types for doctor data and state
interface Doctor {
  name: string;
  department: string;
  specialization: string;
  degree: string;
  mobile: string;
  email: string;
  joiningDate: string;
}

const AllDoctorDetails: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState<Doctor>({
    name: '',
    department: '',
    specialization: '',
    degree: '',
    mobile: '',
    email: '',
    joiningDate: '',
  });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    // Fetch doctors data from the API
    axios.get<Doctor[]>('https://your-api-endpoint.com/doctors') // change with actual api
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the doctor data!', error);
      });
  }, []);

  const handleClickOpen = (doctor: Doctor) => {
    setEditData(doctor);
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

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery) ||
    doctor.department.toLowerCase().includes(searchQuery) ||
    doctor.specialization.toLowerCase().includes(searchQuery) ||
    doctor.degree.toLowerCase().includes(searchQuery) ||
    doctor.mobile.toLowerCase().includes(searchQuery) ||
    doctor.email.toLowerCase().includes(searchQuery) ||
    doctor.joiningDate.toLowerCase().includes(searchQuery)
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
              <TableCell sx={{ color: 'white', width: '15%' }}>Department</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Specialization</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Degree</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Mobile</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Email</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>JoiningDate</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDoctors.map((doctor, index) => (
              <TableRow key={index}>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.department}</TableCell>
                <TableCell>{doctor.specialization}</TableCell>
                <TableCell>{doctor.degree}</TableCell>
                <TableCell>{doctor.mobile}</TableCell>
                <TableCell>{doctor.email}</TableCell>
                <TableCell>{doctor.joiningDate}</TableCell>
                <TableCell>
                  <EditOutlinedIcon
                    onClick={() => handleClickOpen(doctor)}
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
              label="Department"
              type="text"
              fullWidth
              value={editData.department}
              onChange={(e) => setEditData({ ...editData, department: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Specialization"
              type="text"
              fullWidth
              value={editData.specialization}
              onChange={(e) => setEditData({ ...editData, specialization: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Degree"
              type="text"
              fullWidth
              value={editData.degree}
              onChange={(e) => setEditData({ ...editData, degree: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Mobile"
              type="text"
              fullWidth
              value={editData.mobile}
              onChange={(e) => setEditData({ ...editData, mobile: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Email"
              type="text"
              fullWidth
              value={editData.email}
              onChange={(e) => setEditData({ ...editData, email: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Joining Date"
              type="text"
              fullWidth
              value={editData.joiningDate}
              onChange={(e) => setEditData({ ...editData, joiningDate: e.target.value })}
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

export default AllDoctorDetails;
