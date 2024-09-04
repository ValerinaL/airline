import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AttendeeService from '../services/AttendeeService';
import axios from 'axios';

function AttendeeList() {
    const [attendees, setAttendees] = useState([]);

const ATTENDEE_API_BASE_URL = "http://localhost:8080/api/attendees";

    useEffect(() => {
        loadAttendees();
    }, []);

    const loadAttendees = async () => {
        const result = await AttendeeService.getAllAttendees();
        setAttendees(result.data);
    };

    return (
        <div>
            <h2>Attendee</h2>
            <Link to="/add-attendee">Add Attendee</Link>
            <ul>
                {attendees.map((attendee) => (
                    <li key={attendee.id}>
                        {attendee.name} - {attendee.email} - {attendee.phone}
                        <Link to={`/edit-attendee/${attendee.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AttendeeList;
