import React, { Component } from "react";

class PersonalInformation extends Component {
  render() {
    let { firstName, lastName, email, phone, address, section, description, title } =
      this.props.info;
    return (
      <form>
        <h2>Personal Information</h2>
        <label htmlFor="firstNameInput">First Name</label>
        <input
          type="text"
          id="firstNameInput"
          name="firstName"
          value={firstName}
          onChange={(e) => this.props.handleChange(e, section)}
        />
        <label htmlFor="lastNameInput">Last Name</label>
        <input
          type="text"
          id="lastNameInput"
          name="lastName"
          value={lastName}
          onChange={(e) => this.props.handleChange(e, section)}
        />
          <label htmlFor="titleInput">Title</label>
        <input
          type="text"
          id="titleInput"
          name="title"
          value={title}
          onChange={(e) => this.props.handleChange(e, section)}
        />
        <label htmlFor="emailInput">Email</label>
        <input
          type="email"
          id="emailInput"
          name="email"
          value={email}
          onChange={(e) => this.props.handleChange(e, section)}
        />
        <label htmlFor="phoneInput">Phone Number</label>
        <input
          type="tel"
          id="phoneInput"
          name="phone"
          value={phone}
          onChange={(e) => this.props.handleChange(e, section)}
        />
        <label htmlFor="addressInput">Address</label>
        <input
          type="text"
          id="addressInput"
          name="address"
          value={address}
          onChange={(e) => this.props.handleChange(e, section)}
        />
         <label htmlFor="textArea">Description</label>
         <textarea
         id="textArea"
         name="description"
         value={description}
         onChange={(e) => this.props.handleChange(e, section)}>
         </textarea>
      </form>
    );
  }
}

export default PersonalInformation;
