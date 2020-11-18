import React from 'react'
import './HomePage.css'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet' 

const HomePage = (props) => {
    const position = [51.505, -0.09]


    return (
        <MapContainer center={[34.0522, 118.2437]} zoom={12}>
            <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
        </MapContainer>
    )
}

export default HomePage