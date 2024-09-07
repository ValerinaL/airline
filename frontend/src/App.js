// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import Footer from './components/Footer';
// import FlightSearchBoard from './components/FlightSearchBoard';
// import Booking from './components/Booking';
// import NavigationBar from './components/NavigationBar';
// //import FlightSearchBoard from './components/FlightSearchBoard';


// function App() {
//   return (
//     <Router>
//       <NavigationBar/>
//       <Routes>
//         <Route path="/home-page" element={<HomePage />} />
//         <Route path="/flight-search" element={<FlightSearchBoard />} />
//         <Route path="/bookings" element={<Booking />} />
//       </Routes>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import FlightSearchBoard from './components/FlightSearchBoard';
import Booking from './components/Booking';
import NavigationBar from './components/NavigationBar';
import FlightList from './lists/FlightList';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/flight-search" element={<FlightSearchBoard />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path='/flight-list' element={<FlightList/ >} />
       <Route path='/contact' element={<Contact/ >} />
       <Route path='/register' element={<Register/ >} />

       <Route path='/login' element={<Login/ >} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
