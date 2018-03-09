import React from 'react';
import Trip from './Trip';

const TripList = ({ trips, deleteTrip, addLocation }) => {
  return (
    <div className="row">
      {trips.map((trip) => (
        <Trip
          key={trip.id}
          {...trip}
          deleteTrip={deleteTrip}
          addLocation={addLocation}
        />
      ))}
    </div>
  );
};

export default TripList;
