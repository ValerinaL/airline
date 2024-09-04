import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import FlightSearchBoard from './components/FlightSearchBoard';
import Booking from './components/Booking';
//import FlightSearchBoard from './components/FlightSearchBoard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/flight-search" element={<FlightSearchBoard />} />
        <Route path="/bookings" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
