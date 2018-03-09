import React from 'react';

class AddressForm extends React.Component {
  // state = { Latitude: '', Longitude: '' }
  state = { title: '' };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addAddress(this.state.title);
    this.setState({ title: '' });
    // this.props.addItem(this.state.Latitude)
    // this.props.addItem(this.state.Longitude)
    // this.setState({ Latitude: '' })
    // this.setState({ Longitude: '' })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Latitude"
          required
          value={this.state.Latitude}
          onChange={this.handleChange}
          name="Latitude"
        />
        <input
          placeholder="Longitude"
          required
          value={this.state.Longitude}
          onChange={this.handleChange}
          name="Longitude"
        />
      </form>
    );
  }
}

export default AddressForm;
