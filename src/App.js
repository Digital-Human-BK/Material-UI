import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;
