import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Snackbar,
  Alert
} from '@mui/material';
import axios from 'axios';

const SignUp = () => {
  const [isBusiness, setIsBusiness] = useState(false);
  const [residentType, setResidentType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [businessRegistration, setBusinessRegistration] = useState('');

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // 'success' or 'error'

  const handleBusinessToggle = (event) => {
    setIsBusiness(event.target.checked);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    // Base payload for registration
    const payload = {
      name,
      email,
      password,
      address,
      ...(isBusiness && {
        businessType,
        businessRegistration
      }),
      // Set user type
      userType: isBusiness ? 'BUSINESS' : 'RESIDENT',
      // Set default residential type to "Business" for business registrations
      residentialType: isBusiness ? "Business" : residentType,
    };

    try {
      console.log(payload);
      const endpoint = isBusiness
        ? `${import.meta.env.VITE_API_URL}/api/businesses`
        : `${import.meta.env.VITE_API_URL}/api/residents`;
      const response = await axios.post(endpoint, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Registration successful:', response.data);
      setSnackbarMessage('Registration successful!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);

    } catch (error) {
      console.error('Error during registration:', error);
      setSnackbarMessage('Error during registration. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Register {isBusiness ? 'Business' : 'Resident'}
      </Typography>

      <form onSubmit={handleRegisterSubmit}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            required
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            required
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            required
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {!isBusiness && (
            <FormControl fullWidth required variant="outlined">
              <InputLabel id="resident-type-label">Residential Type</InputLabel>
              <Select
                labelId="resident-type-label"
                value={residentType}
                onChange={(e) => setResidentType(e.target.value)}
                label="Residential Type"
              >
                <MenuItem value="single-family">Single Family</MenuItem>
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="condo">Condo</MenuItem>
                <MenuItem value="townhouse">Townhouse</MenuItem>
                <MenuItem value="duplex">Duplex</MenuItem>
              </Select>
            </FormControl>
          )}

          <TextField
            fullWidth
            required
            label="Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          {isBusiness && (
            <>
              <TextField
                fullWidth
                required
                label="Business Type"
                variant="outlined"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
              />
              <TextField
                fullWidth
                required
                label="Business Registration"
                variant="outlined"
                value={businessRegistration}
                onChange={(e) => setBusinessRegistration(e.target.value)}
              />
            </>
          )}

          <FormControlLabel
            control={
              <Checkbox
                checked={isBusiness}
                onChange={handleBusinessToggle}
              />
            }
            label="Register as a business"
          />

          <Button fullWidth type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Stack>
      </form>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignUp;
