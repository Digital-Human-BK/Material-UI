import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  const location = useLocation();
  const [title, setTitle] = useState(null);
  useEffect(()=> {
    const parsedTitle = location.pathname.replace(/\W/g, ' ').trim();
    setTitle(parsedTitle);
  }, [location]);
  return (
    <Grid container>
      <Navbar />
      <Header title={title}/>
      <Outlet />
    </Grid>
  );
}

export default App;
