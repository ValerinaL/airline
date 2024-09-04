
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CheckInList() {
    const [checkins, setCheckins] = useState([]);

    useEffect(() => {
        loadCheckIns();
    }, []);

    const API_URL = 'http://localhost:8080/api/check_in';

    const loadCheckIns = async () => {
        try {
            const response = await axios.get(API_URL);
            setCheckins(response.data); // Set the fetched data into state
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const deleteCheckin = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        loadCheckIns(); // Refresh the list after deletion
    };

    return (
        <div className="container">
            <h2>Check-in</h2>
            <Link to="/add-checkin" className="btn btn-primary mb-3">Add Check-in</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Check-in Time</th>
                        <th>Checked In</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {checkins.map((checkin) => (
                        <tr key={checkin.id}>
                            <td>{checkin.checkinTime}</td>
                            <td>{checkin.isCheckedIn ? 'Yes' : 'No'}</td>
                            <td>
                                <Link to={`/edit-checkin/${checkin.id}`} className="btn btn-sm btn-warning">Edit</Link>
                                <button onClick={() => deleteCheckin(checkin.id)} className="btn btn-sm btn-danger ml-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CheckInList;
