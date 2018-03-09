import React from 'react';

class LocationForm extends React.Component {
  state = { name: '' };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addLocation(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        placeholder="Add A New Location"
        required
        value={this.state.name}
        onChange={this.handleChange}
        name="Name"
      />
    );
  }
}

export default LocationForm;
