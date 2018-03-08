import React from 'react';

const styles = {
  pointer: { cursor: 'help' },
  textDecoration: 'underline',
  color: 'red',
}

const Location = ({
  id,
  name,
  updateLocation,
  deleteLocation,
}) => (
  <div className="col s12">
    <div className="col m8">
      {name}
    </div>
    <div className="col m2">
      <input id={`location-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={() => updateLocation(id)}
      />
        <label htmlFor={`item-${id}`}>Would You Recommend this Location?</label>
    </div>
    <div
      className="col m2"
      style={styles.pointer}
      onClick={() => deleteLocation(id)}
    >
      DEL
    </div>
  </div>
)



export default Location