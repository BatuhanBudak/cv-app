import React, { Component } from "react";

class Experience extends Component {
  render() {
    let { position, company, city, from, to, section,id } = this.props.info;
    return (
      <form>
        <h2>Experience</h2>
        <label htmlFor="positionInput">Position</label>
        <input
          type="text"
          id="positionInput"
          name="position"
          value={position}
          onChange={(e) => this.props.handleChange(e, section, id)}
        />
        <label htmlFor="companyInput">Company</label>
        <input
          type="text"
          id="companyInput"
          value={company}
          name="company"
          onChange={(e) => this.props.handleChange(e, section, id)}
        />
        <label htmlFor="cityInput">City</label>
        <input
          type="text"
          id="cityInput"
          value={city}
          name="city"
          onChange={(e) => this.props.handleChange(e, section, id)}
        />
        <label htmlFor="fromInput">From</label>
        <input
          type="texttext"
          id="fromInput"
          value={from}
          name="from"
          onChange={(e) => this.props.handleChange(e, section, id)}
        />
        <label htmlFor="toInput">To</label>
        <input
          type="text"
          id="toInput"
          value={to}
          name="to"
          onChange={(e) => this.props.handleChange(e, section, id)}
        />
        <div className = "button-group">
           <button onClick={(e) =>this.props.deleteExpOrEdu(e, section, id)}>Delete</button>
           {this.props.isLast &&<button onClick={this.props.addExperince}>Add</button>}
         </div>
      </form>
    );
  }
}

export default Experience;
