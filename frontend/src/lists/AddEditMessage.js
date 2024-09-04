import React, { useState, useEffect } from 'react';
import MessageService from '../services/MessageService';
import { useNavigate, useParams } from 'react-router-dom';

function AddEditMessage() {
    const [message, setMessage] = useState({
        sender: '',
        recipient: '',
        content: '',
        timestamp: ''
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadMessage();
        }
    }, [id]);

    const loadMessage = async () => {
        const result = await MessageService.getMessageById(id);
        setMessage(result.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await MessageService.updateMessage(id, message);
        } else {
            await MessageService.createMessage(message);
        }
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMessage({ ...message, [name]: value });
    };

    return (
        <div>
            <h2>{id ? 'Edit' : 'Add'} Message</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Sender:</label>
                    <input
                        type="text"
                        name="sender"
                        value={message.sender}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Recipient:</label>
                    <input
                        type="text"
                        name="recipient"
                        value={message.recipient}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        name="content"
                        value={message.content}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Timestamp:</label>
                    <input
                        type="text"
                        name="timestamp"
                        value={message.timestamp}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddEditMessage;
