import React from 'react';
import { Box, Grid2, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FlightSearchBoard = () => {

  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/flight-list');
  };
  return (
    <Box component="form" sx={{ mt: 10 , height: '570px' }}>
      <Grid2 container spacing={3} justifyContent="center">
        <Grid2 item xs={12} md={3}>
          <TextField
            fullWidth
            label="From"
            variant="outlined"
            placeholder="Departure City"
            required
          />
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <TextField
            fullWidth
            label="To"
            variant="outlined"
            placeholder="Arrival City"
            required
          />
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <TextField
            fullWidth
            label="Date"
            type="date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid2>
        <Grid2 item xs={12} md={2} container alignItems="flex-end">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSearchClick}
          >
            Search
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
}


export default FlightSearchBoard;

