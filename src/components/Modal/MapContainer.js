import React from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const MapContainer = props => {
  const { position, zoom, onMapClick } = props;

  return (
    <Map center={ position } zoom={ zoom } onClick={ onMapClick } className="map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
       <Popup>
         A pretty CSS3 popup. <br /> Easily customizable.
       </Popup>
     </Marker>
    </Map>
  )
}

export default MapContainer
