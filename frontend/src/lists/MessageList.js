import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MessageService from '../services/MessageService';
import axios from 'axios';

function MessageList() {
    const [messages, setMessages] = useState([]);

const MESSAGE_API_BASE_URL = "http://localhost:8080/api/messages";

    useEffect(() => {
        loadMessages();
    }, []);

    const loadMessages = async () => {
        const result = await MessageService.getAllMessages();
        setMessages(result.data);
    };

    const deleteMessage = async (id) => {
        await MessageService.deleteMessage(id);
        loadMessages(); // Refresh the list after deletion
    };

    return (
        <div>
            <h2>Message</h2>
            <Link to="/add-message">Add Message</Link>
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>
                        <strong>Sender:</strong> {message.sender} - <strong>Recipient:</strong> {message.recipient}
                        <br />
                        <strong>Content:</strong> {message.content}
                        <br />
                        <strong>Timestamp:</strong> {message.timestamp}
                        <br />
                        <Link to={`/edit-message/${message.id}`}>Edit</Link>
                        <button onClick={() => deleteMessage(message.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MessageList;
