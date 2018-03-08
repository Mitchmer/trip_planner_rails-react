import React from 'react'

const Todo = ({ id, name, deleteTrip, addLocation }) => (
  <div>
    <div>
      {name}
    </div>
  </div>
  <button onClick={() => deleteTrip(id)}>
    Delete
  </button>
  <button onClick={() => addLocation(id)}>
    Add Location
  </button>
)

export default Trip