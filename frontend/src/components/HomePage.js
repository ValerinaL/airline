import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import FlightSearchBoard from './FlightSearchBoard';
import { Container, Row, Col } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <NavigationBar />
      <Container fluid className="text-center text-light d-flex align-items-center justify-content-center flex-grow-1">
        <Row>
          <Col>
            <h1>Welcome to Your Airline</h1>
            <p>Search and Book Your Flights with Ease</p>
            <FlightSearchBoard /> {/* Add the FlightSearchBoard component */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
