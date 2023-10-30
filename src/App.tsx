import './App.css';
import { MapContainerPage } from './components/MapContainer.tsx';
import { Box } from '@mui/material';

function App() {
    return (
    <Box sx={{width:'100vw', height: '100vh', backgroundColor:'black'}}>
     <MapContainerPage/>
    </Box>
  )
}

export default App
