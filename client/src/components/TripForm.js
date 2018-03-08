import React from 'react';

class TripForm extends React.Component {
  state = { name: '' };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor((1 + Math.random()) * 1000);
    this.props.addTrip({ id, name: this.state.name });
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Create A Trip Name"
          required
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
      </form>
    );
  }
}

export default TripForm;
