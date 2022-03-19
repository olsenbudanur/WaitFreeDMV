import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'


const Map = ({ location, zoomLevel }) => (
  <div >
    <h2 className="map-h2">DMV Offices Near You</h2>
    <div className="google-map" style={{width: '100%', height: 530,}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAQUw5hI8QZ_c7ejEe0o-_77Qs-bdyV3Y0' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        {/* <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        /> */}
      </GoogleMapReact>
    </div>
  </div>
)

export default Map