import React from 'react';
import { Box } from '@mui/material';
import { Map } from './map/Map.tsx';

const flexCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};


export const MapContainerPage: React.FC = () => {
    return (
        <Box sx={{ width: '100%', height: '100%', color: 'white', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ width: '100%', height: '100%', display:'flex' }}>
                <Box sx={{ width: '300px', height: '100%', flex:'1'}}>
                    <Map/>
                </Box>
            </Box>
        </Box>
    );
}
