import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from '@react-google-maps/api';
import { Box, Link } from '@mui/material';
import markerIcon from '../../assets/marker-small.png'
import { useEffect, useState } from 'react';
import { ReceptionPoint } from '../../model/ReceptionPoint.ts';
import { getReceptionPointsHttp } from '../../repository/getReceptionPointsHttp.ts';

const GOOGLE_MAP_DEFAULT_CENTER = {
    lat: 49,
    lng: 30
};
export const Map: React.FC = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
    });

    const [activeMarker, setActiveMarker] = useState<ReceptionPoint | null>(null);

    const [receptionPoints, setReceptionPoint] = useState<ReceptionPoint[]>([]);

    useEffect(() => {
        getReceptionPointsHttp().then((data) => {
            setReceptionPoint(data);
        })
    }, [])

    const handleActiveMarker = (marker: ReceptionPoint) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };


    return (
        <Box style={{ width: '100%', height: '100%' }}>
            {
                isLoaded
                    ? (<GoogleMap center={GOOGLE_MAP_DEFAULT_CENTER} zoom={6} mapContainerStyle={{
                            width: '100%',
                            height: '100%',
                        }}>
                            {receptionPoints.map(it => {
                                return (
                                    <MarkerF
                                        position={{
                                            lat: Number(it.lat),
                                            lng: Number(it.lng)
                                        }}
                                        key={it.id}
                                        icon={markerIcon}
                                        onClick={() => handleActiveMarker(it)}
                                    >
                                        {activeMarker?.id === it.id ? (
                                            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                                <Box sx={{color: '#3b3939', maxWidth: '200px'}}>
                                                    <h3>{it.name}</h3>
                                                    <p>{it.information}</p>
                                                    <Link rel='noopener noreferrer' target='_blank' href={it.url}>Показати в Google Maps</Link>
                                                </Box>
                                            </InfoWindowF>
                                        ) : null}
                                    </MarkerF>

                                );
                            })}{}
                        </GoogleMap>
                    )
                    : 'Loading...'
            }
        </Box>
    );
}