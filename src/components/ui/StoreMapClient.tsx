// src/components/site/StoreMapClient.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
})

interface Props {
  lat?: number
  lng?: number
  label?: string
  zoom?: number
  className?: string
}

export default function StoreMapClient({
  lat = 28.6139,
  lng = 77.2090,
  label = 'Our Store',
  zoom = 15,
  className = '',
}: Props) {
  const position: [number, number] = [lat, lng]

  return (
    <div
      style={{ height: '480px', width: '100%' }}
      className={`rounded-lg overflow-hidden ${className}`}
    >
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{label}</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}