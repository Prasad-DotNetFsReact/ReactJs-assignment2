import React, { Component } from 'react';

class RegistrationClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      mobile: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state, null, 2));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder="Enter First Name"
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          placeholder="Enter Last Name"
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Enter Email"
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Enter Password"
        />
        <input
          type="text"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
          placeholder="Enter Address"
        />
        <input
          type="text"
          name="mobile"
          value={this.state.mobile}
          onChange={this.handleChange}
          placeholder="Enter Mobile Number"
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationClass;
