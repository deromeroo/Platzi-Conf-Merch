import React from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import '../styles/components/Map.scss';
const Map = ({location}) => {
    
    const {latitude, longitude} = location;
    const position = [latitude, longitude];
    const LocationMarker = ({position}) => {
        const map = useMapEvents({
            click() {
                map.flyTo(position)
            } 
        });

        return (
            <Marker position={position} />
        )

    }
    
    return (
        <MapContainer center={position} zoom={16} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"     
            />
            <LocationMarker position={position}/>
        </MapContainer>
    )
}

export default Map;