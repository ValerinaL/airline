import React, { useState, useEffect } from 'react';
import AdminService from '../services/AdminService';
import { useNavigate, useParams } from 'react-router-dom';

function AddEditAdmin() {
    const [admin, setAdmin] = useState({
        name: '',
        email: '',
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadAdmin();
        }
    }, [id]);

    const loadAdmin = async () => {
        const result = await AdminService.getAdminById(id);
        setAdmin(result.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await AdminService.updateAdmin(id, admin);
        } else {
            await AdminService.createAdmin(admin);
        }
        navigate('/admins');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdmin({ ...admin, [name]: value });
    };

    return (
        <div>
            <h2>{id ? 'Edit' : 'Add'} Admin</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={admin.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={admin.email}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddEditAdmin;
