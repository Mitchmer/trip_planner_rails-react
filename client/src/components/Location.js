import React from 'react';
import AddressForm from './AddressForm';

class Location extends React.Component {
  state = { hideForm: false };

  toggleForm = () => {
    this.setState({ hideForm: !this.state.hideForm });
  };

  render() {
    const styles = {
      pointer: { cursor: 'help' },
      textDecoration: 'underline',
      color: 'red',
    };

    const { id, name, updateLocation, deleteLocation, addAddress } = this.props;

    if (!this.state.hideForm) {
      return (
        <div className="col s12">
          <div className="col m8">{name}</div>
          <div className="col m2">
            <input
              id={`location-${id}`}
              type="checkbox"
              // defaultChecked={complete}
              onClick={() => updateLocation(id)}
            />
            <label htmlFor={`item-${id}`}>
              Would You Recommend this Location?
            </label>
          </div>
          <div
            className="col m2"
            style={styles.pointer}
            onClick={() => deleteLocation(id)} 
          >
            DEL
          </div>
          <button onClick={this.toggleForm}>Add Address</button>
        </div>
      );
    } else {
      return (
        <div className="col s12">
          <div className="col m8">{name}</div>
          <div className="col m2">
            <input
              id={`location-${id}`}
              type="checkbox"
              // defaultChecked={complete}
              onClick={() => updateLocation(id)}
            />
            <label htmlFor={`item-${id}`}>
              Would You Recommend this Location?
            </label>
          </div>
          <div
            className="col m2"
            style={styles.pointer}
            onClick={() => deleteLocation(id)}
          >
            DEL
          </div>
          <button onClick={this.toggleForm}>Add Address</button>
          <AddressForm id={id} addAddress={addAddress} />
        </div>
      );
    }
  }
}

export default Location;
