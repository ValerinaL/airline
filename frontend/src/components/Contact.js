import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Grid2,
    Paper,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Alert,
} from '@mui/material';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [openDialog, setOpenDialog] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);

        // Show the confirmation dialog
        setOpenDialog(true);

        // Clear the form (optional)
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <Container component="main" maxWidth="sm">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '30px' }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Contact Us
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid2 container spacing={2}>
                        <Grid2 item xs={12}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                variant="outlined"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Grid2>
                        <Grid2 item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Grid2>
                        <Grid2 item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                name="message"
                                variant="outlined"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Grid2>
                        <Grid2 item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Send Message
                            </Button>
                        </Grid2>
                    </Grid2>
                </form>
            </Paper>

            {/* Dialog for confirmation message */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Message Sent</DialogTitle>
                <DialogContent>
                    <Alert severity="success" variant="filled">
                        Your message has been sent. We will contact you as soon as possible.
                    </Alert>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Contact;
