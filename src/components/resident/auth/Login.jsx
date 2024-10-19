import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle successful login
      console.log('Login successful:', response.data);
      // You might want to redirect the user or store the user info in local storage/session

    } catch (error) {
      console.error('Error during login:', error);
      // Handle errors, e.g., show an error message
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>

      <form onSubmit={handleLoginSubmit}>
        <Stack spacing={2}>
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
          <Button fullWidth type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
