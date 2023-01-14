import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map(){

    const position = [49.28594, -123.11129];

    const polyline = [

        [49.2859841, -123.1115341], // waterfront
        [49.285581150633966, -123.12012245876285], // burrard
        [49.28276795358473, -123.1164699145821], // granville
        [49.28010484687972, -123.11012142014103], // stadium chinatown
        [49.273374980784865, -123.10037145876296], // main street science world
        [49.262721001091556, -123.06927941643552], // commercial broadway
        [49.24844626535717, -123.05598167410812], // nanaimo
        [49.24436337925635, -123.04537402992739], // 29th ave
        [49.23855530902799, -123.0317256145831], // joyce-colllingwood
        [49.22991271599505, -123.01265107225555], // patterson
        [49.22593989446889, -123.00385127225569], // metrotown
        [49.220193228996386, -122.98845204229738], // royal oak
        [49.21254265709066, -122.95914504342], // edmonds
        [49.200068725477024, -122.94922489130668], // 22nd street
        [49.20159918383558, -122.91263972992837], // new westminster
        [49.204943945073374, -122.90607708574763], // columbia
        [49.204575904842045, -122.87402738018886], // scott road
        [49.1991136014707, -122.85066387225632], // gateway
        [49.18971392944762, -122.84792071458409], // surrey central
        [49.1829310367517, -122.84473292807587], // king george
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