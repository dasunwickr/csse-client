import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import Login from '../../components/resident/auth/Login';
import SignUp from '../../components/resident/auth/SignUp';

const ResidentAuthView = () => {
  const [view, setView] = useState('login'); 

  return (
    <Box sx={{ padding: 4, maxWidth: 600, margin: 'auto' }}>
      {view === 'login' ? <Login /> : <SignUp />}

      <Box sx={{ textAlign: 'center', marginTop: 2 }}>
        {view === 'login' ? (
          <>
            <Button onClick={() => setView('signup')}>Don't have an account? Register here</Button>
          </>
        ) : (
          <>
            <Button onClick={() => setView('login')}>Already have an account? Login here</Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ResidentAuthView;
