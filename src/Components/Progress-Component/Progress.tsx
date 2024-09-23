import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface ProgressProps {
  size?: number;
  thickness?: number;
  color?: 'primary' | 'secondary' | 'inherit'; // You can add more colors as needed
}

const Progress: React.FC<ProgressProps> = ({ size = 40, thickness = 3.6, color = "primary" }) => {
  // Responsive size using inline styles
  const responsiveSize = {
    width: '40px',
    height: '40px',
    '@media (min-width: 640px)': { width: '60px', height: '60px' }, // sm
    '@media (min-width: 768px)': { width: '80px', height: '80px' }, // md
    '@media (min-width: 1024px)': { width: '100px', height: '100px' } // lg
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress
        size={size} // Use size prop for default size
        thickness={thickness}
        color={color}
        sx={responsiveSize} // Apply responsive size styles
      />
    </Box>
  );
};

export default Progress;
