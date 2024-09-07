import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <AppBar position="static" color="default">
      <Container>
        <Toolbar disableGutters>
        <Typography variant="h6" component={Link} to="/home-page" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
    Airline System
</Typography>
          <Button color="inherit" href="/flight-search">Flight</Button>
          <Button color="inherit" href="/bookings">Booking</Button>
          <Button color="inherit" href="/contact">Contact</Button>
          <Button color="inherit" href="/register">Register</Button>
          <Button color="inherit" href="/login">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavigationBar;
