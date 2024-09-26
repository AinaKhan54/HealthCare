import React, { useEffect, useState } from 'react';
import { getAppointments, deleteAppointment, updateAppointment } from "../../../../src/utils/userApi";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Tooltip, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { Toaster, toast } from 'react-hot-toast'; // Import Toaster and toast

export interface AppointmentData {
  id: string;
  name: string;
  email: string;
  mobileNumber: string;
  adharNo: string;
  gender: string;
  date: string;
  time: string;
  reason: string;
}

const AppointmentTable: React.FC = () => {
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [currentAppointment, setCurrentAppointment] = useState<AppointmentData | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointments();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchAppointments();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredAppointments = appointments.filter(appointment =>
    Object.values(appointment).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchQuery)
    )
  );

  const handleEdit = (appointment: AppointmentData) => {
    setCurrentAppointment(appointment);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentAppointment(null); // Reset current appointment when closing
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteAppointment(id);
      setAppointments(appointments.filter(appointment => appointment.id !== id));
      toast.success('Appointment deleted successfully!'); // Success message for deletion
    } catch (error) {
      console.error('Error deleting appointment:', error);
      toast.error('Failed to delete appointment.'); // Error message
    }
  };

  const handleUpdate = async (updatedAppointment: AppointmentData) => {
    try {
      await updateAppointment(updatedAppointment.id, updatedAppointment);
      setAppointments(appointments.map(appointment =>
        appointment.id === updatedAppointment.id ? updatedAppointment : appointment
      ));
      toast.success('Appointment updated successfully!'); // Success message for update
      handleClose();
    } catch (error) {
      console.error('Error updating appointment:', error);
      toast.error('Failed to update appointment.'); // Error message
    }
  };

  const handleSave = () => {
    if (currentAppointment) {
      handleUpdate(currentAppointment);
    }
  };

  // Function to format date to DD-MM-YYYY
  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`; // Return date in DD-MM-YYYY format
  };

  return (
    <div className="flex flex-col h-screen p-10 ml-[250px]">
      <Toaster /> {/* Place Toaster here for alerts */}
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
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px' }}>Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px' }}>Email</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px' }}>Mobile Number</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px' }}>Date</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px' }}>Aadhar Number</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px' }}>Gender</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px' }}>Time</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px' }}>Reason</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', padding: '12px' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAppointments.map((appointment) => (
              <TableRow key={appointment.id} className="hover:bg-purple-100">
                <TableCell>{appointment.name}</TableCell>
                <TableCell>{appointment.email}</TableCell>
                <TableCell>{appointment.mobileNumber}</TableCell>
                <TableCell>{formatDate(appointment.date)}</TableCell>
                <TableCell>{appointment.adharNo}</TableCell>
                <TableCell>{appointment.gender}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.reason}</TableCell>
                <TableCell>
                  <Tooltip title="Delete">
                    <DeleteOutlineIcon
                      onClick={() => handleDelete(appointment.id)}
                      className="cursor-pointer mr-2 transform transition-transform duration-200 hover:scale-110"
                      sx={{ color: 'red' }}
                    />
                  </Tooltip>
                  <Tooltip title="Edit">
                    <EditOutlinedIcon
                      onClick={() => handleEdit(appointment)}
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
          <DialogTitle>Edit Appointment</DialogTitle>
          <DialogContent>
            {currentAppointment && (
              <>
                <TextField
                  margin="dense"
                  label="Name"
                  type="text"
                  fullWidth
                  value={currentAppointment.name}
                  onChange={(e) => setCurrentAppointment({ ...currentAppointment, name: e.target.value })}
                />
                <TextField
                  margin="dense"
                  label="Email"
                  type="email"
                  fullWidth
                  value={currentAppointment.email}
                  onChange={(e) => setCurrentAppointment({ ...currentAppointment, email: e.target.value })}
                />
                <TextField
                  margin="dense"
                  label="Mobile Number"
                  type="text"
                  fullWidth
                  value={currentAppointment.mobileNumber}
                  onChange={(e) => setCurrentAppointment({ ...currentAppointment, mobileNumber: e.target.value })}
                />
                <TextField
                  margin="dense"
                  label="Adhar No"
                  type="text"
                  fullWidth
                  value={currentAppointment.adharNo}
                  onChange={(e) => setCurrentAppointment({ ...currentAppointment, adharNo: e.target.value })}
                />
                <TextField
                  margin="dense"
                  label="Gender"
                  type="text"
                  fullWidth
                  value={currentAppointment.gender}
                  onChange={(e) => setCurrentAppointment({ ...currentAppointment, gender: e.target.value })}
                />
                <TextField
                  margin="dense"
                  label="Date"
                  type="date"
                  fullWidth
                  value={currentAppointment.date.split('T')[0]} // Convert to YYYY-MM-DD format
                  onChange={(e) => setCurrentAppointment({ ...currentAppointment, date: e.target.value })}
                />
                <TextField
                  margin="dense"
                  label="Time"
                  type="time"
                  fullWidth
                  value={currentAppointment.time}
                  onChange={(e) => setCurrentAppointment({ ...currentAppointment, time: e.target.value })}
                />
                <TextField
                  margin="dense"
                  label="Reason"
                  type="text"
                  fullWidth
                  value={currentAppointment.reason}
                  onChange={(e) => setCurrentAppointment({ ...currentAppointment, reason: e.target.value })}
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

export default AppointmentTable;
