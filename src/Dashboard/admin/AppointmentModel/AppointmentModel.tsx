import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { AppointmentData } from '../Pages/appointment';

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
  appointment: AppointmentData;
  onUpdate: (appointment: AppointmentData) => void;
}

const AppointmentModel: React.FC<AppointmentModalProps> = ({ open, onClose, appointment, onUpdate }) => {
  const [editedAppointment, setEditedAppointment] = useState<AppointmentData>(appointment);

  useEffect(() => {
    setEditedAppointment(appointment);
  }, [appointment]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedAppointment({
      ...editedAppointment,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    onUpdate(editedAppointment);
    onClose();  // Close the modal after update
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        className: 'max-w-full sm:max-w-90vw md:max-w-80vw lg:max-w-70vw', // Tailwind classes for responsiveness
      }}
    >
      <DialogTitle>Edit Appointment</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          name="name"
          value={editedAppointment.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={editedAppointment.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Mobile Number"
          name="mobileNumber"
          value={editedAppointment.mobileNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Adhar No"
          name="adharNo"
          value={editedAppointment.adharNo}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Gender"
          name="gender"
          value={editedAppointment.gender}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={editedAppointment.date.split('T')[0]} // Format to YYYY-MM-DD
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Time"
          name="time"
          value={editedAppointment.time}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Reason"
          name="reason"
          value={editedAppointment.reason}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Update</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppointmentModel;
