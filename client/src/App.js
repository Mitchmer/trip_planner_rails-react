import React, { Component } from 'react';
import Trip from './components/Trip.js';
import TripForm from './components/TripForm.js';
import TripList from './components/TripList.js';
import LocationForm from './components/LocationForm.js';
import Location from './components/Location.js';
import LocationList from './components/LocationList.js';

// import Address from './components/Address.js';

class App extends Component {
  state = { trips: [], locations: [], addresses: [] };

  componentDidMount() {
    fetch('/api/trips', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((trip) => {
        const { trips } = this.state;
        this.setState({ trips: trip });
      });
  }

  addTrip = (name) => {
    fetch('/api/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(name),
    })
      .then((res) => res.json())
      .then((newTrip) => {
        const { trips } = this.state;
        this.setState({ trips: [...trips, newTrip] });
      });
  };

  deleteTrip = (id) => {
    fetch(`/api/trips/${id}`, { method: 'DELETE' }).then(() => {
      const { trips } = this.state;
      this.setState({ trips: trips.filter((t) => t.id !== id) });
    });
  };

  addLocation = (location) => {
    const id = location.id;
    fetch(`/api/trips/${id}/locations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(location),
    })
      .then((res) => res.json())
      .then((newLocation) => {
        const { locations } = this.state;
        this.setState({ locations: [...locations, newLocation] });
      });
  };

  deleteLocation = (trip_id, id) => {
    fetch(`/api/trips/${trip_id}/locations/${id}`, { method: 'DELETE' }).then(
      () => {
        const { locations } = this.state;
        this.setState({ locations: locations.filter((t) => t.id !== id) });
      },
    );
  };

  updateLocation = (location) => {};

  addAddress = (id) => {
    const { addresses } = this.state;
    this.setState({ addresses: addresses.filter((t) => t.id !== id) });
  };

  render() {
    const { trips, locations } = this.state;

    return (
      <div className="row">
        <TripForm trips={trips} addTrip={this.addTrip} />
        <TripList
          trips={trips}
          deleteTrip={this.deleteTrip}
          addLocation={this.addLocation}
        />
        <LocationList
          locations={locations}
          deleteLocation={this.deleteLocation}
          addAddress={this.addAddress}
        />
      </div>
    );
  }
}

export default App;
