import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TicketService from '../services/TicketService';
import axios from 'axios';

function TicketList() {
    const [tickets, setTickets] = useState([]);
const TICKET_API_BASE_URL = "http://localhost:8080/tickets";
    useEffect(() => {
        loadTickets();
    }, []);

    const loadTickets = async () => {
        const result = await TicketService.getAllTickets();
        setTickets(result.data);
    };

    const deleteTicket = async (id) => {
        await TicketService.deleteTicket(id);
        loadTickets(); // Refresh the list after deletion
    };

    return (
        <div>
            <h2>Ticket</h2>
            <Link to="/add-ticket">Add Ticket</Link>
            <ul>
                {tickets.map((ticket) => (
                    <li key={ticket.id}>
                        <strong>Ticket Number:</strong> {ticket.ticketNumber}
                        <br />
                        <strong>Issue Date:</strong> {ticket.issueDate}
                        <br />
                        <strong>Booking ID:</strong> {ticket.booking.id}
                        <br />
                        <strong>Seat ID:</strong> {ticket.seat.id}
                        <br />
                        <strong>Attendee ID:</strong> {ticket.attendee.id}
                        <br />
                        <Link to={`/edit-ticket/${ticket.id}`}>Edit</Link>
                        <button onClick={() => deleteTicket(ticket.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TicketList;
