import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map(){

    const position = [49.28594, -123.11129];

    const polyline = [

        [49.28594, -123.11129],
        [49.2856, -123.1198],
        [49.28325, -123.1161],
        [49.2793980, -123.1093110],
        [49.2731524, -123.1004436],
        [49.2618519, -123.0691167],
        [49.2483740, -123.0560202],
        [49.2442084, -123.0459222],
        [49.2383663, -123.0316780],
        [49.2298294, -123.0127880],
        [49.2258524, -123.0038944],
        [49.2200742, -122.9884160],
        [49.2121286, -122.9592330],
        [49.2000649, -122.9490150],
        [49.2013700, -122.9127416],
        [49.2048182, -122.9061329],
        [49.2245450, -122.8895213],
        [49.2331095, -122.8827758],
        [49.2484558, -122.8968482],
        [49.2534219, -122.9181460]
    ]

    const purpleOption = {color: 'purple'};
    const redOption = {color: 'red'};

    return (
        <MapContainer className={style.map} center={position} zoom={14} schrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>

            <CircleMarker center={[49.27450, -123.12189]} pathOptions={redOption} radius={20}>
                <Popup> You reached your destination </Popup>
            </CircleMarker>

            <Polyline pathOptions={purpleOption} positions={polyline} />

        </MapContainer>
    )
}