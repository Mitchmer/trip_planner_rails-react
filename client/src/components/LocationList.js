import React from 'react';
import Location from './Location';

const LocationList = ({
  location,
  locations,
  updateLocation,
  deleteLocation,
  addAddress,
}) => (
  <div className="row">
    {locations.map((location) => (
      <Location
        key={location.id}
        {...location}
        updateLocation={updateLocation}
        deleteLocation={deleteLocation}
        addAddress={addAddress}
      />
    ))}
  </div>
);

export default LocationList;
