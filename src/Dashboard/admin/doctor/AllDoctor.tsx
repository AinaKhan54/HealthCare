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
import { Tooltip, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axiosInstance from '../../../auth/axiosInstance'; // Update import path if needed
import { Toaster, toast } from 'react-hot-toast';

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
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [doctorToDelete, setDoctorToDelete] = useState<string | null>(null);
  const [editData, setEditData] = useState<Doctor | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    axiosInstance.get('/doctors')
      .then(response => {
        if (response.data && response.data.doctors) {
          setDoctors(response.data.doctors);
        } else {
          console.error('Unexpected response structure:', response.data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the doctor data!', error);
        toast.error('Error fetching doctor data!');
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
          toast.success('Doctor information updated successfully!');
          setOpen(false);
        })
        .catch(error => {
          console.error('There was an error updating the doctor data!', error);
          toast.error('Error updating doctor information!');
        });
    }
  };

  const handleConfirmDelete = (id: string) => {
    setDoctorToDelete(id);
    setConfirmOpen(true);
  };

  const handleDelete = () => {
    if (doctorToDelete) {
      axiosInstance.delete(`/doctors/${doctorToDelete}`)
        .then(() => {
          setDoctors(doctors.filter(doctor => doctor._id !== doctorToDelete));
          toast.success('Doctor deleted successfully!');
          setConfirmOpen(false);
          setDoctorToDelete(null);
        })
        .catch(error => {
          console.error('There was an error deleting the doctor!', error);
          toast.error('Error deleting doctor!');
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
      <Toaster />
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
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>Email</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>Mobile Number</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>Specialization</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>Qualifications</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>Experience (years)</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>Availability</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px', textAlign: 'center' }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredDoctors.map((doctor, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:hover': { backgroundColor: '#f5f5f5' },
                  '& td': { textAlign: 'center', padding: '12px' },
                }}
              >
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.email}</TableCell>
                <TableCell>{doctor.mobileNumber}</TableCell>
                <TableCell>{doctor.specialization}</TableCell>
                <TableCell>{doctor.qualifications.join(', ')}</TableCell>
                <TableCell>{doctor.experience}</TableCell>
                <TableCell>{doctor.availability.days.join(', ')} ({doctor.availability.timeSlots.join(', ')})</TableCell>
                <TableCell>
                  <Tooltip title="Delete">
                    <DeleteOutlineIcon
                      onClick={() => handleConfirmDelete(doctor._id)}
                      className="cursor-pointer mr-2 transform transition-transform duration-200 hover:scale-110"
                      sx={{ color: 'red' }}
                    />
                  </Tooltip>
                  <Tooltip title="Edit">
                    <EditOutlinedIcon
                      onClick={() => handleClickOpen(doctor)}
                      className="cursor-pointer transform transition-transform duration-200 hover:scale-110"
                      sx={{ color: 'blue' }}
                    />
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Confirmation Dialog */}
        <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <p>Are you sure you want to delete this doctor?</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmOpen(false)} variant="contained" sx={{ backgroundColor: '#FF4C4C', color: 'white' }}>
              Cancel
            </Button>
            <Button onClick={handleDelete} variant="contained" sx={{ backgroundColor: '#4CAF50', color: 'white' }}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Details</DialogTitle>
          <DialogContent>
            {editData && (
              <>
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
                  value={editData.mobileNumber}
                  onChange={(e) => setEditData({ ...editData, mobileNumber: e.target.value })}
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
                  label="Qualifications"
                  type="text"
                  fullWidth
                  value={editData.qualifications.join(', ')}
                  onChange={(e) => setEditData({ ...editData, qualifications: e.target.value.split(', ') })}
                />
                <TextField
                  margin="dense"
                  label="Experience"
                  type="number"
                  fullWidth
                  value={editData.experience}
                  onChange={(e) => setEditData({ ...editData, experience: parseInt(e.target.value) })}
                />
                <TextField
                  margin="dense"
                  label="Availability"
                  type="text"
                  fullWidth
                  value={editData.availability.days.join(', ') + ' (' + editData.availability.timeSlots.join(', ') + ')'}
                  onChange={(e) => setEditData({
                    ...editData,
                    availability: {
                      ...editData.availability,
                      days: e.target.value.split(', ')
                    }
                  })}
                />
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" sx={{ backgroundColor: '#FF4C4C', color: 'white' }}>
              Cancel
            </Button>
            <Button onClick={handleSave} variant="contained" sx={{ backgroundColor: '#4CAF50', color: 'white' }}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </TableContainer>
    </div>
  );
};

export default AllDoctorDetails;
