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
import axiosInstance from '../../../auth/axiosInstance'; // Update import path if needed

interface Doctor {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  specialization: string;
  qualifications: string[];
  experience: number;
  availability: {
    days: string[];
    timeSlots: string[];
  };
}

const AllDoctorDetails: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState<Doctor | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    axiosInstance.get('/doctors')
      .then(response => {
        // Check if the response contains data
        if (response.data && response.data.doctors) {
          setDoctors(response.data.doctors);
        } else {
          console.error('Unexpected response structure:', response.data);
        }
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
    if (editData) {
      axiosInstance.put(`/doctors/${editData._id}`, editData)
        .then(() => {
          setDoctors(doctors.map(doc => doc._id === editData._id ? editData : doc));
          setOpen(false);
        })
        .catch(error => {
          console.error('There was an error updating the doctor data!', error);
        });
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      axiosInstance.delete(`/doctors/${id}`)
        .then(() => {
          setDoctors(doctors.filter(doctor => doctor._id !== id));
        })
        .catch(error => {
          console.error('There was an error deleting the doctor!', error);
        });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery) ||
    doctor.email.toLowerCase().includes(searchQuery) ||
    doctor.mobileNumber.toLowerCase().includes(searchQuery) ||
    doctor.specialization.toLowerCase().includes(searchQuery) ||
    doctor.qualifications.join(' ').toLowerCase().includes(searchQuery) ||
    doctor.experience.toString().includes(searchQuery) ||
    doctor.availability.days.join(' ').toLowerCase().includes(searchQuery) ||
    doctor.availability.timeSlots.join(' ').toLowerCase().includes(searchQuery)
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
              <TableCell sx={{ color: 'white', width: '15%' }}>Email</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Mobile</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Specialization</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Qualifications</TableCell>
              <TableCell sx={{ color: 'white', width: '10%' }}>Experience</TableCell>
              <TableCell sx={{ color: 'white', width: '15%' }}>Availability</TableCell>
              <TableCell sx={{ color: 'white', width: '10%' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDoctors.map((doctor) => (
              <TableRow key={doctor._id}>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.email}</TableCell>
                <TableCell>{doctor.mobileNumber}</TableCell>
                <TableCell>{doctor.specialization}</TableCell>
                <TableCell>{doctor.qualifications.join(', ')}</TableCell>
                <TableCell>{doctor.experience}</TableCell>
                <TableCell>
                  {doctor.availability.days.join(', ')} | {doctor.availability.timeSlots.join(', ')}
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleClickOpen(doctor)} color="primary" variant="contained">
                    <EditOutlinedIcon />
                  </Button>
                  <Button onClick={() => handleDelete(doctor._id)} color="secondary" variant="contained">
                    <DeleteOutlineIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Doctor</DialogTitle>
        <DialogContent>
          {editData && (
            <div>
              <TextField
                label="Name"
                fullWidth
                margin="dense"
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              />
              <TextField
                label="Email"
                fullWidth
                margin="dense"
                value={editData.email}
                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
              />
              <TextField
                label="Mobile"
                fullWidth
                margin="dense"
                value={editData.mobileNumber}
                onChange={(e) => setEditData({ ...editData, mobileNumber: e.target.value })}
              />
              <TextField
                label="Specialization"
                fullWidth
                margin="dense"
                value={editData.specialization}
                onChange={(e) => setEditData({ ...editData, specialization: e.target.value })}
              />
              <TextField
                label="Qualifications"
                fullWidth
                margin="dense"
                value={editData.qualifications.join(', ')}
                onChange={(e) => setEditData({ ...editData, qualifications: e.target.value.split(',').map(q => q.trim()) })}
              />
              <TextField
                label="Experience"
                fullWidth
                margin="dense"
                type="number"
                value={editData.experience}
                onChange={(e) => setEditData({ ...editData, experience: Number(e.target.value) })}
              />
              <TextField
                label="Availability Days"
                fullWidth
                margin="dense"
                value={editData.availability.days.join(', ')}
                onChange={(e) => setEditData({ ...editData, availability: { ...editData.availability, days: e.target.value.split(',').map(d => d.trim()) } })}
              />
              <TextField
                label="Availability Time Slots"
                fullWidth
                margin="dense"
                value={editData.availability.timeSlots.join(', ')}
                onChange={(e) => setEditData({ ...editData, availability: { ...editData.availability, timeSlots: e.target.value.split(',').map(ts => ts.trim()) } })}
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AllDoctorDetails;
