import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface ProgressProps {
  size?: number;
  thickness?: number;
  color?: 'primary' | 'secondary' | 'inherit'; // You can add more colors as needed
}

const Progress: React.FC<ProgressProps> = ({ size = 40, thickness = 3.6, color = "primary" }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress size={size} thickness={thickness} color={color} />
    </Box>
  );
};

export default Progress;
