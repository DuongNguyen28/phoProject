import './App.css';
import MenuItem from './components/MenuItem';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './theme/navbar.js';
import NewFood from './components/NewFood.js';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Container>
        <NewFood/>
        <Grid container spacing = {2}>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
