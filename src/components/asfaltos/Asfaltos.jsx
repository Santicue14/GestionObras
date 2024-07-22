import { GeoJSON, LayersControl, MapContainer, TileLayer } from 'react-leaflet';
import Carpeta_Asfaltica_2017 from './mapas/Carpeta_Asfaltica_2017.json'
import Carpeta_Asfaltica_2018 from './mapas/Carpeta_Asfaltica_2018.json'
import Carpeta_Asfaltica_2020 from './mapas/Carpeta_Asfaltica_2020.json'
import Hormigon_2017 from './mapas/Hormigon_2017.json';
import Hormigon_2019 from './mapas/Hormigon_2019.json';
import Hormigon_2020 from './mapas/Hormigon_2020.json';
import Nac_y_Prov_2021 from './mapas/Nac_y_Prov_2021.json';


function capitalizar(str) {
    return str.replace(/\w\S*/g, function (e) {
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
    });
}
let layerList = [Carpeta_Asfaltica_2017, Carpeta_Asfaltica_2018, Carpeta_Asfaltica_2020, Hormigon_2017, Hormigon_2019, Hormigon_2020, Nac_y_Prov_2021];

const AsfaltosData = () => {
    const createLayer = (layerFromJson) => (
        <LayersControl.Overlay checked name={layerFromJson.name} key={layerFromJson.name} >
            <GeoJSON data={layerFromJson.features}
                style={() => ({
                    color: layerFromJson.color,
                    weight: 2,
                    opacity: 1,
                })} onEachFeature={(feature, layer) => {
                    layer.bindPopup(`${capitalizar(feature.properties.Name)} <br /> Etapa: ${layerFromJson.name}`)
                }}
            />
        </LayersControl.Overlay>
    )
    return (
        layerList.map((layer) => createLayer(layer))
    );
}
export const Asfaltos = () => {
    return (<MapContainer center={[-34.518524, -58.751895]} className='mapClass' zoom={13} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LayersControl>
            <AsfaltosData />
        </LayersControl>
    </MapContainer>)
}

