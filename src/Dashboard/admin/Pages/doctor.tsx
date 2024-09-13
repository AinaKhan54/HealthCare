import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

interface Row {
  label: string;
  value: string;
}

const Doctors: React.FC = () => {
  const rows: Row[] = [
    { label: 'Name', value: 'Ameta' },
    { label: 'Patients', value: 'Vikas' },
    { label: 'Appointment Date', value: '1/08/2024' },
    { label: 'Disease', value: 'Fever' },
  ];

  return (
    <div className="flex flex-col items-center h-screen p-4 md:p-10 bg-gray-300 overflow-x-auto">
      <TableContainer component={Paper} className="w-full">
        <Table>
          <TableHead>
            <TableRow>
              {rows.map((row, i) => (
                <TableCell key={i} sx={{ backgroundColor: 'purple', color: 'white' }}>
                  {row.label}
                </TableCell>
              ))}
              <TableCell sx={{ backgroundColor: 'purple', color: 'white' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {rows.map((row, i) => (
                <TableCell key={i}>{row.value}</TableCell>
              ))}
              <TableCell>
                <div className="flex space-x-2">
                  <DeleteOutlineIcon style={{ cursor: 'pointer' }} />
                  <EditOutlinedIcon style={{ cursor: 'pointer' }} />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Doctors;
