import React from 'react';

const Trip = ({ id, name, deleteTrip }) => (
  <div>
<<<<<<< HEAD
    <div>{name}</div>
    <button onClick={() => deleteTrip(id)}>Delete</button>
  </div>
=======
    <div>
      {name}
    </div>
    <button onClick={() => deleteTrip(id)}>
      Delete
    </button>
  </div>

>>>>>>> changed render
  // <button onClick={() => addLocation(id)}>
  //   Add Location
  // </button>
);

export default Trip;
