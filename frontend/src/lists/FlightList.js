// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import FlightService from '../services/FlightService';
// import axios from 'axios';

// function FlightList() {
//     const [flights, setFlights] = useState([]);
// const FLIGHT_API_BASE_URL = "http://localhost:8085/flight";
//     useEffect(() => {
//         loadFlights();
//     }, []);

//     const loadFlights = async () => {
//         const result = await FlightService.getAllFlights();
//         setFlights(result.data);
//     };

//     return (
//         <div>
//             <h2>Flight List</h2>
//             <Link to="/add-flight">Add Flight</Link>
//             <ul>
//                 {flights.map((flight) => (
//                     <li key={flight.id}>
//                         Flight Number: {flight.flightNumber} - From: {flight.origin} - To: {flight.destination}
//                         <Link to={`/edit-flight/${flight.id}`}>Edit</Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,
    Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, Container
} from '@mui/material';

const FlightList = () => {
    const [flights, setFlights] = useState([]);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [updatedFlight, setUpdatedFlight] = useState({
        flightNumber: '',
        departure: '',
        arrival: '',
        status: '',
    });

    useEffect(() => {
        fetchFlights();
    }, []);

    const fetchFlights = () => {
        // Mock data for demonstration purposes
        const mockData = [
            { id: 1, flightNumber: 'TK 202', departure: '2024-08-25 10:00', arrival: '2024-08-25 12:30', status: 'On Time' },
            { id: 2, flightNumber: 'TK 303', departure: '2024-08-26 14:00', arrival: '2024-08-26 16:30', status: 'Delayed' },
            { id: 3, flightNumber: 'TK 404', departure: '2024-08-27 09:00', arrival: '2024-08-27 11:30', status: 'Cancelled' },
        ];

        setFlights(mockData);
    };

    const handleEditClick = (flight) => {
        setSelectedFlight(flight);
        setUpdatedFlight({
            flightNumber: flight.flightNumber,
            departure: flight.departure,
            arrival: flight.arrival,
            status: flight.status,
        });
        setOpenEditDialog(true);
    };

    const handleDeleteClick = (flight) => {
        setSelectedFlight(flight);
        setOpenDeleteDialog(true);
    };

    const handleSaveChanges = () => {
        axios.put(`http://localhost:8080/flights/${selectedFlight.id}`, updatedFlight)
            .then(() => {
                setOpenEditDialog(false);
                fetchFlights(); // Refresh the list after update
            })
            .catch(error => {
                console.error('There was an error updating the flight!', error);
            });
    };

    const handleConfirmDelete = () => {
        axios.delete(`/deleteFlight/${selectedFlight.id}`)
            .then(() => {
                setOpenDeleteDialog(false);
                fetchFlights(); // Refresh the list after deletion
            })
            .catch(error => {
                console.error('There was an error deleting the flight!', error);
            });
    };

    const handleModalChange = (e) => {
        setUpdatedFlight({
            ...updatedFlight,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Flight List
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Flight ID</TableCell>
                            <TableCell>Flight Number</TableCell>
                            <TableCell>Departure</TableCell>
                            <TableCell>Arrival</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {flights.map(flight => (
                            <TableRow key={flight.id}>
                                <TableCell>{flight.id}</TableCell>
                                <TableCell>{flight.flightNumber}</TableCell>
                                <TableCell>{flight.departure}</TableCell>
                                <TableCell>{flight.arrival}</TableCell>
                                <TableCell>{flight.status}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="warning"
                                        size="small"
                                        onClick={() => handleEditClick(flight)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        size="small"
                                        onClick={() => handleDeleteClick(flight)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Dialog for Editing Flight */}
            <Dialog
                open={openEditDialog}
                onClose={() => setOpenEditDialog(false)}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>Edit Flight</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="flightNumber"
                        label="Flight Number"
                        type="text"
                        fullWidth
                        variant="outlined"
                        name="flightNumber"
                        value={updatedFlight.flightNumber}
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
                        value={updatedFlight.departure}
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
                        value={updatedFlight.arrival}
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
                        value={updatedFlight.status}
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

            {/* Dialog for Deleting Flight */}
            <Dialog
                open={openDeleteDialog}
                onClose={() => setOpenDeleteDialog(false)}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>Delete Flight</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to delete flight {selectedFlight?.flightNumber}?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default FlightList;
