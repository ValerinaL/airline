import React from 'react';
import FlightSearchBoard from './FlightSearchBoard';
import { Box, Typography, Grid2 } from '@mui/material';
import './HomePage.css'; 
import pinkImage from '../assets/pink.png';

const HomePage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '50vh',
        backgroundImage: `url(${pinkImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // color: 'white',
      }}
  >
      <Box 
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 8
        }}
      >
        <Grid2 container spacing={2} justifyContent="center">
          <Grid2 item xs={12} md={8}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Your Airline
            </Typography>
            <Typography variant="h6" paragraph>
              Search and Book Your Flights with Ease
            </Typography>
            <FlightSearchBoard /> 
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default HomePage;
