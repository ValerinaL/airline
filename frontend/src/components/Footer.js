import React from "react";
import { Container, Grid2, Typography, Link, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#343a40", color: "#fff", py: 2 }}
    >
      <Container>
        <Grid2 container spacing={12}>
          <Grid2 item xs={12} md={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Box component="ul" sx={{ listStyleType: "none", p: 0 }}>
              <li>
                <Link href="/home-page" color="inherit" underline="hover">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/flight-search" color="inherit" underline="hover">
                  Flight Search
                </Link>
              </li>
              <li>
                <Link href="/booking" color="inherit" underline="hover">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/contact" color="inherit" underline="hover">
                  Contact Us
                </Link>
              </li>
            </Box>
          </Grid2>
          <Grid2
            item
            xs={12}
            md={4}
            sx={{ position: "absolute", left: "1000px" }}
          >
            <Typography variant="h6">Contact Us</Typography>
            <Box>
              <Typography variant="body2">
                Email: support@airlinesystem.com
              </Typography>
              <Typography variant="body2">Phone: +123 456 7890</Typography>
              <Typography variant="body2">
                Address: 123 Main Street, City, Country
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          &copy; 2024 Airline Ticketing Copyright. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
