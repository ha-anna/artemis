'use client'
import React, { useEffect, useState } from 'react'
import mapboxgl, { LngLat, Map as MapboxMap } from 'mapbox-gl'

export default function Map() {
  const [map, setMap] = useState<MapboxMap | null>(null)
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    const savedValue = window.localStorage.getItem('artemis-consent')
    setConsent(savedValue == 'true' ?? false)
  }, [])

  useEffect(() => {
    const mapInstance = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: new LngLat(126.9784, 37.5665),
      zoom: 12,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_KEY ?? ''
    })

    mapInstance.on('load', () => {
      setMap(mapInstance)

      mapInstance.addControl(
        new mapboxgl.GeolocateControl({
          trackUserLocation: consent,
          showUserHeading: consent ? true : false,
          showUserLocation: consent ? true : false
        })
      )

      if (consent) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { longitude, latitude } = position.coords
            mapInstance.flyTo({ center: new LngLat(longitude, latitude) })
          },
          error => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                console.log('User denied the request for Geolocation.')
                break
              case error.POSITION_UNAVAILABLE:
                console.log('Location information is unavailable.')
                break
              case error.TIMEOUT:
                console.log('The request to get user location timed out.')
                break
              default:
                console.log('An unknown error occurred.')
                break
            }
          }
        )
      }
    })

    return () => {
      if (mapInstance) mapInstance.remove()
    }
  }, [consent])

  return (
    <div className='rounded-lg mb-[300px] h-[80vh] p-4 mx-10 translate-y-[150px]'>
      <div
        id='map-container'
        className='rounded-lg h-full relative z-10'
      />
    </div>
  )
}
