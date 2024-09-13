// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import {
//   Button,
//   TextField,
//   Modal,
//   Box,
//   Typography,
//   IconButton,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// // Define the type for form data
// interface FormData {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// const RegistrationForm: React.FC = () => {
//   const [open, setOpen] = useState<boolean>(false);
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle form submission (e.g., send data to server)
//     console.log('Form Data:', formData);
//     handleClose();
//   };

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <>
//       <Button variant="contained" color="primary" onClick={handleOpen}>
//         Register
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="registration-modal-title"
//         aria-describedby="registration-modal-description"
//       >
//         <Box sx={style}>
//           <Box display="flex" justifyContent="space-between" alignItems="center">
//             <Typography id="registration-modal-title" variant="h6" component="h2">
//               Register
//             </Typography>
//             <IconButton onClick={handleClose}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               margin="normal"
//               fullWidth
//               label="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               variant="outlined"
//             />
//             <TextField
//               margin="normal"
//               fullWidth
//               label="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               variant="outlined"
//             />
//             <TextField
//               margin="normal"
//               fullWidth
//               label="Password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               variant="outlined"
//             />
//             <TextField
//               margin="normal"
//               fullWidth
//               label="Confirm Password"
//               name="confirmPassword"
//               type="password"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//               variant="outlined"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               sx={{ mt: 2 }}
//             >
//               Submit
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default RegistrationForm;
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      Contact
    </div>
  );
};

export default Contact;
