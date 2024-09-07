// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';

// const Booking = () => {
//     const [bookings, setBookings] = useState([]);
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [selectedBooking, setSelectedBooking] = useState(null);
//     const [updatedBooking, setUpdatedBooking] = useState({
//         flight: '',
//         departure: '',
//         arrival: '',
//         status: '',
//     });

//     useEffect(() => {
//         fetchBookings();
//     }, []);

// //    const fetchBookings = () => {
// //        axios.get('/bookings')
// //            .then(response => {
// //                setBookings(response.data);
// //            })
// //            .catch(error => {
// //                console.error('There was an error fetching the bookings!', error);
// //            });
// //    };

// const fetchBookings = () => {
//     // Mock data
//     const mockData = [
//         { id: 1, flight: 'TK 202', departure: '2024-08-25 10:00', arrival: '2024-08-25 12:30', status: 'Confirmed' },
//         { id: 2, flight: 'TK 303', departure: '2024-08-26 14:00', arrival: '2024-08-26 16:30', status: 'Pending' },
//         { id: 3, flight: 'TK 404', departure: '2024-08-27 09:00', arrival: '2024-08-27 11:30', status: 'Cancelled' },
//     ];

//     setBookings(mockData);
// };


//     const handleEditClick = (booking) => {
//         setSelectedBooking(booking);
//         setUpdatedBooking({
//             flight: booking.flight,
//             departure: booking.departure,
//             arrival: booking.arrival,
//             status: booking.status,
//         });
//         setShowEditModal(true);
//     };

//     const handleDeleteClick = (id) => {
//         axios.delete(`/bookings/${id}`)
//             .then(() => {
//                 fetchBookings(); 
//             })
//             .catch(error => {
//                 console.error('There was an error deleting the booking!', error);
//             });
//     };

//     const handleSaveChanges = () => {
//         axios.put(`http://localhost:8080/bookings/${selectedBooking.id}`, updatedBooking)
//             .then(() => {
//                 setShowEditModal(false);
//                 fetchBookings(); // Refresh the list after update
//             })
//             .catch(error => {
//                 console.error('There was an error updating the booking!', error);
//             });
//     };



//     const handleModalChange = (e) => {
//         setUpdatedBooking({
//             ...updatedBooking,
//             [e.target.name]: e.target.value
//         });
//     };

//     return (
//         <Container>
//             <Row className="my-4">
//                 <Col>
//                     <h2 className="text-center">My Bookings</h2>
//                     <Table striped bordered hover responsive>
//                         <thead>
//                             <tr>
//                                 <th>Booking ID</th>
//                                 <th>Flight</th>
//                                 <th>Departure</th>
//                                 <th>Arrival</th>
//                                 <th>Status</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {bookings.map(booking => (
//                                 <tr key={booking.id}>
//                                     <td>{booking.id}</td>
//                                     <td>{booking.flight}</td>
//                                     <td>{booking.departure}</td>
//                                     <td>{booking.arrival}</td>
//                                     <td>{booking.status}</td>
//                                     <td>
//                                         <Button variant="warning" size="sm" onClick={() => handleEditClick(booking)}>Edit</Button>{' '}
//                                         <Button variant="danger" size="sm" onClick={() => handleDeleteClick(booking.id)}>Delete</Button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </Table>
//                 </Col>
//             </Row>

//             {/* Modal for Editing Booking */}
//             <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Edit Booking</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group controlId="formFlight">
//                             <Form.Label>Flight</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="flight"
//                                 value={updatedBooking.flight}
//                                 onChange={handleModalChange}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="formDeparture">
//                             <Form.Label>Departure</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="departure"
//                                 value={updatedBooking.departure}
//                                 onChange={handleModalChange}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="formArrival">
//                             <Form.Label>Arrival</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="arrival"
//                                 value={updatedBooking.arrival}
//                                 onChange={handleModalChange}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="formStatus">
//                             <Form.Label>Status</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="status"
//                                 value={updatedBooking.status}
//                                 onChange={handleModalChange}
//                             />
//                         </Form.Group>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowEditModal(false)}>Close</Button>
//                     <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// };

// export default Booking;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,
    Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, Container
} from '@mui/material';

const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [updatedBooking, setUpdatedBooking] = useState({
        flight: '',
        departure: '',
        arrival: '',
        status: '',
    });

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = () => {
        // Mock data
        const mockData = [
            { id: 1, flight: 'TK 202', departure: '2024-08-25 10:00', arrival: '2024-08-25 12:30', status: 'Confirmed' },
            { id: 2, flight: 'TK 303', departure: '2024-08-26 14:00', arrival: '2024-08-26 16:30', status: 'Pending' },
            { id: 3, flight: 'TK 404', departure: '2024-08-27 09:00', arrival: '2024-08-27 11:30', status: 'Cancelled' },
        ];

        setBookings(mockData);
    };

    const handleEditClick = (booking) => {
        setSelectedBooking(booking);
        setUpdatedBooking({
            flight: booking.flight,
            departure: booking.departure,
            arrival: booking.arrival,
            status: booking.status,
        });
        setOpenEditDialog(true);
    };

    const handleDeleteClick = (booking) => {
        setSelectedBooking(booking);
        setOpenDeleteDialog(true);
    };

    const handleDeleteConfirm = () => {
        axios.delete(`http://localhost:8080/deleteBooking/${selectedBooking.id}`)
            .then(() => {
                setOpenDeleteDialog(false);
                fetchBookings(); // Refresh the list after deletion
            })
            .catch(error => {
                console.error('There was an error deleting the booking!', error);
            });
    };

    const handleSaveChanges = () => {
        axios.put(`http://localhost:8080/bookings/${selectedBooking.id}`, updatedBooking)
            .then(() => {
                setOpenEditDialog(false);
                fetchBookings(); // Refresh the list after update
            })
            .catch(error => {
                console.error('There was an error updating the booking!', error);
            });
    };

    const handleModalChange = (e) => {
        setUpdatedBooking({
            ...updatedBooking,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                My Bookings
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Booking ID</TableCell>
                            <TableCell>Flight</TableCell>
                            <TableCell>Departure</TableCell>
                            <TableCell>Arrival</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookings.map(booking => (
                            <TableRow key={booking.id}>
                                <TableCell>{booking.id}</TableCell>
                                <TableCell>{booking.flight}</TableCell>
                                <TableCell>{booking.departure}</TableCell>
                                <TableCell>{booking.arrival}</TableCell>
                                <TableCell>{booking.status}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="warning"
                                        size="small"
                                        onClick={() => handleEditClick(booking)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        size="small"
                                        onClick={() => handleDeleteClick(booking)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Dialog for Editing Booking */}
            <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)} fullWidth maxWidth="sm">
                <DialogTitle>Edit Booking</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="flight"
                        label="Flight"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name="flight"
                        value={updatedBooking.flight}
                        onChange={handleModalChange}
                    />
                    <TextField
                        margin="dense"
                        id="departure"
                        label="Departure"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name="departure"
                        value={updatedBooking.departure}
                        onChange={handleModalChange}
                    />
                    <TextField
                        margin="dense"
                        id="arrival"
                        label="Arrival"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name="arrival"
                        value={updatedBooking.arrival}
                        onChange={handleModalChange}
                    />
                    <TextField
                        margin="dense"
                        id="status"
                        label="Status"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name="status"
                        value={updatedBooking.status}
                        onChange={handleModalChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenEditDialog(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveChanges} color="primary">
                        Save Changes
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Dialog for Deleting Booking */}
            <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)} fullWidth maxWidth="sm">
                <DialogTitle>Delete Booking</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this booking?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteConfirm} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Booking;
