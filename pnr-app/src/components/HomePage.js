import React from 'react'
import './HomePage.css'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet' 
import * as tempData from '../data/temp.json'
import * as courtData from '../data/626_courts.json'
import { Button } from 'react-bootstrap';
import ballIcon from '../icons/ballIcon'

const HomePage = (props) => {

    const handleJoinCourt = () => {
        
    }

    return (
        <div className='home'>
            <MapContainer center={[34.106701, -118.060898]} zoom={12} className='map'>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {courtData.default.map(court => (
                    <Marker key={court.ID} position={court.coordinates} icon={ballIcon}>
                        <Popup>
                            <p>{court.Name}</p>
                            <p>Available courts: {court.OpenCourts}</p>
                            <button className='' onClick={handleJoinCourt}>
                                Join
                            </button>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
            {console.log(courtData.default)}
        </div>
    )
}

export default HomePage