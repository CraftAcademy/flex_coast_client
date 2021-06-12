import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { providers } from '../data/gothenburg'
import { mapStyles } from '../data/mapStyles'

const MapSection = () => {
  let center = {
    lat: 57.700946,
    lng: 11.96603,
  }

  const containerStyle = {
    width: '100%',
    height: '600px',
  }

  const defaultMapOptions = {
    fullScreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    styles: mapStyles,
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  })
  let markers = providers.map((provider) => {
    return (
      <Marker
        key={providers.name}
        icon={{
          path: 'M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9 C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8 c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z',
          scale: 0.09,
          strokeColor: 'darkgrey',
          strokeWeight: 2,
        }}
        position={{
          lat: provider.fullAddress.latitude,
          lng: provider.fullAddress.longitude,
        }}
      />
    )
  })

  return (
    isLoaded && (
      <GoogleMap
        options={defaultMapOptions}
        className='map'

        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}>
        {markers}
      </GoogleMap>
    )
  )
}

export default MapSection
