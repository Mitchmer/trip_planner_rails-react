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

  addTrip = (trip) => {
    // TODO Make API call to Rails to Add Item.
    const { trips } = this.state;
    this.setState({ trips: [...trips, trip] });
  };

  deleteTrip = (id) => {
    //TODO Make API call to Rails to Delete Item.
    const { trips } = this.state;
    this.setState({ trips: trips.filter((t) => t.id !== id) });
  };

  addLocation = (location) => {
    const { locations } = this.state;
    this.setState({ locations: [...locations, location] });
  };

  deleteLocation = (id) => {
    //TODO Make API call to Rails to Delete Item.
    const { locations } = this.state;
    this.setState({ locations: locations.filter((t) => t.id !== id) });
  };

  addAddress = (id) => {};

  render() {
    const { trips, locations } = this.state;

    return (
      <div>
        <TripForm trips={trips} addTrip={this.addTrip} />
        <TripList
          trips={trips}
          deleteTrip={this.deleteTrip}
          addLocation={this.addLocation}
        />
        <LocationList
          locations={locations}
          deleteLocation={this.deleteLocation}
          // addLocation={this.addLocation}
        />
      </div>
    );
  }
}

export default App;
