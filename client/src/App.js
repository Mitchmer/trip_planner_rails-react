import React, { Component } from 'react';
import Trip from './components/Trip.js';
import TripForm from './components/TripForm.js';
import TripList from './components/TripList.js;';
// import Location from './components/Location.js';
// import Address from './components/Address.js';

class App extends Component {
  state = { trips: [], location: [], address: [] };

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

  addLocation = (id) => {};

  addAddress = (id) => {};

  render() {
    const { trips } = this.state;

    return (
      <div>
        <TripForm trips={trips} addTrip={this.addTrip} />
        <TripList trips={trips} />
      </div>
    );
  }
}

export default App;
