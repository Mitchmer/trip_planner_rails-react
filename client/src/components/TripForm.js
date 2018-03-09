import React from 'react';

class TripForm extends React.Component {
  state = { name: '' };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTrip({ name: this.state.name });
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
