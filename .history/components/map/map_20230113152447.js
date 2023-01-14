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

    const secondPolyline = [

        [49.204943945073374, -122.90607708574763], // columbia
        [49.224860238697396, -122.88949270294468], // sapperton
        [49.23268213068468, -122.88456287225554], // braid
        [49.24875892482227, -122.89717730665], // lougheed town tentre 
        [49.25367827613695, -122.91868207173422], // production way - University 
    ]

    const markers = [
        {
            popup: "Burrard Station",
            coord: polyline[1]
        },
        {
            popup: "Granville Station",
            coord: polyline[2]
        },
        {
            popup: "Stadium - Chinatown Station",
            coord: polyline[3]
        },
        {
            popup: "Main Street - Science World Station",
            coord: polyline[4]
        },
        {
            popup: "Commercial Broadway Station",
            coord: polyline[5]
        },
        {
            popup: "Nanaimo Station",
            coord: polyline[6]
        },
        {
            popup: "29th Avenue Station",
            coord: polyline[7]
        },
        {
            popup: "Joyce - Collingwood Station",
            coord: polyline[8]
        },
        {
            popup: "Patterson Station",
            coord: polyline[9]
        },
        {
            popup: "Metrotown Station",
            coord: polyline[10]
        },
        {
            popup: "Royal Oak Station",
            coord: polyline[11]
        },
        {
            popup: "Edmonds Station",
            coord: polyline[12]
        },
        {
            popup: "22nd Street Station",
            coord: polyline[13]
        },
        {
            popup: "New Westminister Station",
            coord: polyline[14]
        },
        {
            popup: "Columbia Station",
            coord: polyline[15]
        },
        {
            popup: "Sapperton Station",
            coord: polyline[16]
        },
        {
            popup: "Braid Station",
            coord: polyline[17]
        },
        {
            popup: "Lougheed Town Centre Station",
            coord: polyline[18]
        },
    ]

    const secondLineMarkers = [
        {
            popup: "Columbia Station",
            coord: secondPolyline[1]
        },
        {
            popup: "Sapperton Station",
            coord: secondPolyline[2]
        },
        {
            popup: "Braid Station",
            coord: secondPolyline[3]
        },
        {
            popup: "Lougheed Town Centre Station",
            coord: secondPolyline[4]
        },
        {
            popup: "production Way - University Station",
            coord: secondPolyline[4]
        },
    ]

    const purpleOption = {color: '#2596be'};
    const redOption = {color: 'red'};

    return (

        <MapContainer className={style.map} center={position} zoom={14} schrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markers.map((o)=>(
            <Marker position={o.coord}>
                <Popup>
                   {o.popup}
                </Popup>
            </Marker>
            ))}


            {secondLineMarkers.map((o) => (
                <Marker position={o.coord}>
                    <Popup>
                        {o.popup}
                    </Popup>
                </Marker>
            ))}

            {/* <Marker position={position}>
                <Popup>
                    Skytrain. <br/> Waterfront.
                </Popup>
            </Marker> */}

            <CircleMarker center={[49.2859841, -123.1115341]} pathOptions={redOption} radius={20}>
                <Popup> You reached your destination </Popup>
            </CircleMarker>

            <Polyline pathOptions={purpleOption} positions={polyline} />
            <Polyline pathOptions={purpleOption} positions={secondPolyline} />

        </MapContainer>
    )
}