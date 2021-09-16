import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

function Map() {
    return (
        <GoogleMap
           defaultZoom={50}
           defaultCenter={{let: 45.421532, lng: -75.697189}}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap;