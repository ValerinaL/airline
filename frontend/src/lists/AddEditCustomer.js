import React, { useState, useEffect } from 'react';
import CustomerService from '../services/CustomerService';
import { useNavigate, useParams } from 'react-router-dom';

function AddEditCustomer() {
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadCustomer();
        }
    }, [id]);

    const loadCustomer = async () => {
        const result = await CustomerService.getCustomerById(id);
        setCustomer(result.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await CustomerService.updateCustomer(id, customer);
        } else {
            await CustomerService.createCustomer(customer);
        }
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    return (
        <div>
            <h2>{id ? 'Edit' : 'Add'} Customer</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={customer.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={customer.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddEditCustomer;
