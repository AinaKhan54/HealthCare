import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { MessageData } from './messages'; // Ensure the correct import path

interface MessageModalProps {
  open: boolean;
  onClose: () => void;
  message: MessageData;
  onUpdate: (message: MessageData) => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ open, onClose, message, onUpdate }) => {
  const [editedMessage, setEditedMessage] = React.useState<MessageData>(message);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedMessage({
      ...editedMessage,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    onUpdate(editedMessage);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Message</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={editedMessage.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={editedMessage.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          variant="outlined"
          name="message"
          value={editedMessage.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
            <Button onClick={onClose} variant="contained" sx={{ backgroundColor: '#FF4C4C', color: 'white' }}>
              Cancel
            </Button>
            <Button onClick={handleUpdate} variant="contained" sx={{ backgroundColor: '#4CAF50', color: 'white' }}>
              Save
            </Button>
          </DialogActions>
    </Dialog>
  );
};

export default MessageModal;
