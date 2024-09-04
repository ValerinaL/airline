import React, { useState, useEffect } from 'react';
import AdminService from '../services/AdminService';
import { Link } from 'react-router-dom';

function AdminList() {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        loadAdmins();
    }, []);

    const loadAdmins = async () => {
        try {
            const response = await AdminService.getAllAdmins();
            setAdmins(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const deleteAdmin = async (id) => {
        await AdminService.deleteAdmin(id);
        loadAdmins();
    };

    return (
        <div>
            <h2>Admin</h2>
            <Link to="/add-admin">Add Admin</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map((admin) => (
                        <tr key={admin.id}>
                            <td>{admin.name}</td>
                            <td>{admin.email}</td>
                            <td>
                                <Link to={`/edit-admin/${admin.id}`}>Edit</Link>
                                <button onClick={() => deleteAdmin(admin.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminList;
