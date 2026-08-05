// src/components/site/StoreMap.tsx
import { useEffect, useState } from 'react'

interface StoreMapProps {
  lat?: number
  lng?: number
  label?: string
  zoom?: number
  className?: string
}

export default function StoreMap({
  lat = 28.6139,
  lng = 77.2090,
  label = 'Our Store',
  zoom = 15,
  className = '',
}: StoreMapProps) {
  const [MapComponent, setMapComponent] = useState<React.ComponentType<StoreMapProps> | null>(null)

  useEffect(() => {
    // Only import Leaflet after mount — never on the server
    import('./StoreMapClient').then((mod) => {
      setMapComponent(() => mod.default)
    })
  }, [])

  if (!MapComponent) {
    return (
      <div
        style={{ height: '480px', width: '100%' }}
       className={`rounded-lg bg-foreground/8 ${className}`}
      />
    )
  }

  return <MapComponent lat={lat} lng={lng} label={label} zoom={zoom} className={className} />
}