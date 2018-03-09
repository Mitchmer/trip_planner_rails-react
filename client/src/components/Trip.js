import React from 'react';
import LocationForm from './LocationForm';

class Trip extends React.Component {
  state = { hideForm: false };

  toggleForm = () => {
    this.setState({ hideForm: !this.state.hideForm });
  };

  render() {
    const { id, name, deleteTrip, addLocation } = this.props;
    if (!this.state.hideForm) {
      return (
        <div>
          <div>{name}</div>
          <button onClick={() => deleteTrip(id)}>Delete</button>
          <button onClick={this.toggleForm}>Add Location</button>
        </div>
      );
    } else {
      return (
        <div>
          <div>{name}</div>
          <button onClick={() => deleteTrip(id)}>Delete</button>
          <button onClick={this.toggleForm}>Add Location</button>
          <LocationForm />
        </div>
      );
    }
  }
}
export default Trip;
