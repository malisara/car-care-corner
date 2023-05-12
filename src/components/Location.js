import React from 'react';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const storeLocation = [51.505, -0.09];
export default function Location() {
    return (

        <MapContainer
            style={{ height: '350px', width: '350px' }}
            center={storeLocation}
            zoom={17}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={storeLocation}>
                <Popup>
                    Car Care Corner
                </Popup>
            </Marker>
        </MapContainer>
    );
}
