import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomerService from '../services/CustomerService';
import axios from 'axios';

function CustomerList() {
    const [customers, setCustomers] = useState([]);

const CUSTOMER_API_BASE_URL = "http://localhost:8080/customers";

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = async () => {
        const result = await CustomerService.getAllCustomers();
        setCustomers(result.data);
    };

    return (
        <div>
            <h2>Customer List</h2>
            <Link to="/add-customer">Add Customer</Link>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>
                        Name: {customer.name} - Email: {customer.email} - Phone: {customer.phoneNumber}
                        <Link to={`/edit-customer/${customer.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CustomerList;
