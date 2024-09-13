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
import { Tooltip, TextField } from '@mui/material';
import AppointmentModel from '../AppointmentModel/AppointmentModel';

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

  const fetchAppointments = async () => {
    try {
      const data = await getAppointments();
      setAppointments(data);  // Set the fetched appointments
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };
  

  useEffect(() => {
    fetchAppointments();
  }, [])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredAppointments = appointments.filter(appointment =>
    Object.values(appointment).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchQuery)
    )
  );

  const handleEdit = (appointment: AppointmentData) => {
    if (!appointment.id) {
      console.error("ID is undefined. Cannot edit appointment.");
      return;
    }
    setCurrentAppointment(appointment);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async (id: string) => {
    try {
      await deleteAppointment(id);
      setAppointments(appointments.filter(row => row.id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };
  const handleUpdate = async (updatedAppointment: AppointmentData) => {
    if (!updatedAppointment.id) {
      console.error("ID is undefined. Cannot update appointment.");
      return;
    }
    try {
      await updateAppointment(updatedAppointment.id, updatedAppointment);
      setAppointments(appointments.map(appointment =>
        appointment.id === updatedAppointment.id ? updatedAppointment : appointment
      ));
      handleClose();
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

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
            <TableRow>
              <TableCell sx={{ backgroundColor: 'purple', color: 'white' }}>Name</TableCell>
              <TableCell sx={{ backgroundColor: 'purple', color: 'white' }}>Email</TableCell>
              <TableCell sx={{ backgroundColor: 'purple', color: 'white' }}>Mobile Number</TableCell>
              <TableCell sx={{ backgroundColor: 'purple', color: 'white' }}>Adhar No</TableCell>
              <TableCell sx={{ backgroundColor: 'purple', color: 'white' }}>Gender</TableCell>
              <TableCell sx={{ backgroundColor: 'purple', color: 'white' }}>Date</TableCell>
              <TableCell sx={{ backgroundColor: 'purple', color: 'white' }}>Time</TableCell>
              <TableCell sx={{ backgroundColor: 'purple', color: 'white' }}>Reason</TableCell>
              <TableCell sx={{ backgroundColor: 'purple', color: 'white' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="text-slate-600">
            {filteredAppointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.name}</TableCell>
                <TableCell>{appointment.email}</TableCell>
                <TableCell>{appointment.mobileNumber}</TableCell>
                <TableCell>{appointment.adharNo}</TableCell>
                <TableCell>{appointment.gender}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.reason}</TableCell>
                <TableCell>
                  <Tooltip title="Delete">
                    <DeleteOutlineIcon
                      style={{ cursor: 'pointer', marginRight: 8 }}
                      onClick={() => handleDelete(appointment.id)}
                    />
                  </Tooltip>
                  <Tooltip title="Edit">
                    <EditOutlinedIcon
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleEdit(appointment)}
                    />
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {currentAppointment && (
        <AppointmentModel
          open={open}
          onClose={handleClose}
          appointment={currentAppointment}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default AppointmentTable;
