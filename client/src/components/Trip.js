import React from 'react';

const Trip = ({ id, name, deleteTrip }) => (
  <div>
    <div>{name}</div>
    <button onClick={() => deleteTrip(id)}>Delete</button>
  </div>

  // <button onClick={() => addLocation(id)}>
  //   Add Location
  // </button>
);

export default Trip;
