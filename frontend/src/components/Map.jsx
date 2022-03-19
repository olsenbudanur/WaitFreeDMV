import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({ location, zoomLevel }) => (
  <div >
    <p>DMV Offices Near You</p>
    <div style={{width: '100%', height: 600,}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAQUw5hI8QZ_c7ejEe0o-_77Qs-bdyV3Y0' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
      </GoogleMapReact>
    </div>
  </div>
)

export default Map