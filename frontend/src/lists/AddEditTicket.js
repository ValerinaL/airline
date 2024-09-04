import React, { useState, useEffect } from 'react';
import TicketService from '../services/TicketService';
import { useNavigate, useParams } from 'react-router-dom';

function AddEditTicket() {
    const [ticket, setTicket] = useState({
        ticketNumber: '',
        issueDate: '',
        booking: { id: '' },
        seat: { id: '' },
        attendee: { id: '' }
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadTicket();
        }
    }, [id]);

    const loadTicket = async () => {
        const result = await TicketService.getTicketById(id);
        setTicket(result.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await TicketService.updateTicket(id, ticket);
        } else {
            await TicketService.createTicket(ticket);
        }
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTicket({ ...ticket, [name]: value });
    };

    return (
        <div>
            <h2>{id ? 'Edit' : 'Add'} Ticket</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Ticket Number:</label>
                    <input
                        type="text"
                        name="ticketNumber"
                        value={ticket.ticketNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Issue Date:</label>
                    <input
                        type="datetime-local"
                        name="issueDate"
                        value={ticket.issueDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Booking ID:</label>
                    <input
                        type="number"
                        name="booking.id"
                        value={ticket.booking.id}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Seat ID:</label>
                    <input
                        type="number"
                        name="seat.id"
                        value={ticket.seat.id}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Attendee ID:</label>
                    <input
                        type="number"
                        name="attendee.id"
                        value={ticket.attendee.id}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddEditTicket;
