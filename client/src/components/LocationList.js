import React from 'react';
import Location from './Location';

const LocationList = ({ location, updateLocation, deleteLocation}) => (
  <div className="row">
    { locations.map (location =>
      <Location
        key={location.id}
        {...location}
        updateLocation={updateLocation}
        deleteLocation={deleteLocation}
        />
      )
    }
  </div>
)

export default LocationList
