import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
  <footer className="bg-dark text-light py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-12 mb-3">
          <h5>About Us</h5>
          <p>
            We are committed to providing the best airline ticketing experience with reliable services and customer support. Thank you!
          </p>
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#home" className="text-light">Home</a></li>
            <li><a href="#flight-search" className="text-light">Flight Search</a></li>
            <li><a href="#booking" className="text-light">Booking</a></li>
            <li><a href="#contact" className="text-light">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
          <h5>Contact Us</h5>
          <p>Email: support@airlinesystem.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>&copy; 2024 Airline Ticketing System. All rights reserved.</p>
      </div>
    </div>
  </footer>

  );
}

export default Footer;

