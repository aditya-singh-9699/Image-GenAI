import * as React from 'react';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

export function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
