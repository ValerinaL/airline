// FlightSearchBoard.js
import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const FlightSearchBoard = () => {
  return (
    <Form className="mt-4">
      <Row className="justify-content-center">
        <Col md={3}>
          <Form.Group controlId="formFrom">
            <Form.Label>From</Form.Label>
            <Form.Control type="text" placeholder="Departure City" />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group controlId="formTo">
            <Form.Label>To</Form.Label>
            <Form.Control type="text" placeholder="Arrival City" />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Col>
        <Col md={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FlightSearchBoard;
