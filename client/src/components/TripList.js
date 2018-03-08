import React from 'react';
import Trip from './Trip';

const TripList = ({ trips, deleteTrip }) => {
  <div className="row">
    {trips.map((trip) => (
      <Trip key={trip.id} {...trip} deleteTrip={deleteTrip} />
    ))}
  </div>;
};
