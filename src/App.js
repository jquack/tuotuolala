// import React from "react";
// import "./style.css";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicButtons() {
  return (
<Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item><Button variant="contained">拖</Button></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Button variant="outlined">tuo</Button></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Button variant="contained">拉</Button></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Button variant="outlined">La</Button></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Button variant="contained">拉</Button></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Button variant="outlined">La</Button></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Button variant="contained">拉</Button></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Button variant="outlined">La</Button></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Button variant="contained">拉</Button></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Button variant="outlined">La</Button></Item>
        </Grid>
      </Grid>
    </Box>
    // <Stack spacing={2} direction="row">
    //   <Button variant="contained">拖</Button>
    //   <Button variant="outlined">tuo</Button>
    // </Stack>
  );
}
