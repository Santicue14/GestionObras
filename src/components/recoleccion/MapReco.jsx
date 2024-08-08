import { GeoJSON, LayersControl, MapContainer, TileLayer } from 'react-leaflet';
import Jcp_Zonas from './JOSE_C_PAZ_ZONAS.json';

const info = JSON.parse(JSON.stringify(Jcp_Zonas.features))

function capitalizar(str) {
    return str.replace(/\w\S*/g, function (e) {
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
    });
}
const GeoZones = () => {
    const createZone = (zoneData) => (
        <LayersControl.Overlay key={zoneData.properties.Name} checked name={capitalizar(zoneData.properties.Name)}> 
            <GeoJSON
                data={zoneData}
                style={(feature) => ({
                    color: feature.color,
                    weight: 0.5,
                    opacity: 1,
                })}
                onEachFeature={(feature, zone) => {
                    zone.bindPopup(`${capitalizar(feature.properties.Name)}`);
                }}
            />
        </LayersControl.Overlay>
    );

    return (
        info.map((zone) => createZone(zone))
    );
}
export const MapReco = () => {
    return (
        <MapContainer center={[-34.518524, -58.751895]} className='mapClass' zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LayersControl>
           <LayersControl.Overlay name='Ocultar capas'>

           </LayersControl.Overlay>
                <GeoZones />
            </LayersControl>
        </MapContainer>
    )
}