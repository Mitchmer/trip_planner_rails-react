import React, { Component } from 'react';
// import Trip from './components/Trip.js';
import TripForm from './components/TripForm.js';
// import TripList from './components/TripList.js;';
// import Location from './components/Location.js';
// import Address from './components/Address.js';

class App extends Component {
  state = { trips: [], location: [], address: [] };

  addTrip = () => {
    //TODO Make API call to Rails to Add Item.
    // const { trips } = this.state;
    // const id = Math.floor((1 + Math.random()) * 1000);
    // this.setState({ trips: [...trips, { id, name }] });
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

    return <TripForm trips={trips} />;
  }
}

export default App;
