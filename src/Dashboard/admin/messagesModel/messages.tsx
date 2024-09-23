import React, { useEffect, useState } from 'react';
import { fetchMessages, deleteMessage, updateMessage } from "../../../utils/userApi";
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
import MessageModal from './messageModel';

export interface MessageData {
  id: string;
  name: string;
  email: string;
  message: string;
}

const Messages: React.FC = () => {
  const [rows, setRows] = useState<MessageData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [currentMessage, setCurrentMessage] = useState<MessageData | null>(null);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const data = await fetchMessages();
        setRows(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    getMessages();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteMessage(id);
      setRows(rows.filter(row => row.id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const handleEdit = (message: MessageData) => {
    setCurrentMessage(message);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async (updatedMessage: MessageData) => {
    try {
      await updateMessage(currentMessage!.id, updatedMessage);
      setRows(rows.map(row => (row.id === currentMessage!.id ? updatedMessage : row)));
      handleClose();
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen p-10 ml-[250px] bg-gray-300">
      <div className="flex justify-end mb-4">
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          className="w-full max-w-xs"
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'purple' }}> {/* Set the header row background color */}
              <TableCell sx={{ color: 'white' }}>Name</TableCell> {/* Set text color to white */}
              <TableCell sx={{ color: 'white' }}>Email</TableCell>
              <TableCell sx={{ color: 'white' }}>Message</TableCell>
              <TableCell sx={{ color: 'white' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter(row => row.name.toLowerCase().includes(searchQuery))
              .map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.message}</TableCell>
                  <TableCell>
                    <Tooltip title="Delete">
                      <DeleteOutlineIcon onClick={() => handleDelete(row.id)} className="cursor-pointer mr-2" />
                    </Tooltip>
                    <Tooltip title="Edit">
                      <EditOutlinedIcon onClick={() => handleEdit(row)} className="cursor-pointer" />
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open && currentMessage && (
        <MessageModal
          open={open}
          onClose={handleClose}
          message={currentMessage}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default Messages;
