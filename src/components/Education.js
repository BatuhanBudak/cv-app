import React, { Component } from "react";

class Education extends Component {
  // constructor(props) {
  //   super(props);

  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange = (e) => {
  //   this.props.handleChange(e, this.props.id);
  // };
 
  render() {
    let { university, city, degree, from, to, section, id, subject } = this.props.info;

    return (
      <form>
        <h2>Education</h2>
        <label htmlFor="universityInput">University</label>
        <input
          type="text"
          id="universityInput"
          name="university"
          value={university}
          onChange={(e) => this.props.handleChange(e, section, id)}
        />
        <label htmlFor="cityInput">City</label>
        <input
          type="text"
          id="cityInput"
          name="city"
          value={city}
          onChange={(e) => this.props.handleChange(e, section, id)}
        />
        <label htmlFor="degreeInput">Degree</label>
        <input
          type="text"
          id="degreeInput"
          name="degree"
          value={degree}
          onChange={(e) => this.props.handleChange(e, section, id)}
        />
          <label htmlFor="subjectInput">Subject</label>
        <input
          type="text"
          id="subjectInput"
          name="subject"
          value={subject}
          onChange={(e) => this.props.handleChange(e, section, id)}
        />
        <label htmlFor="fromInput">From</label>
        <input
          type="texttext"
          id="fromInput"
          name="from"
          value={from}
          onChange={(e) => this.props.handleChange(e, section, id)}
        />
        <label htmlFor="toInput">To</label>
        <input
          type="text"
          id="toInput"
          name="to"
          value={to}
          onChange={(e) => this.props.handleChange(e, section, id)}
        />
         <div className = "button-group">
           <button onClick={(e) =>this.props.deleteExpOrEdu(e, section, id)}>Delete</button>
           {this.props.isLast &&<button onClick={this.props.addEducation}>Add</button>}
         </div>
      </form>
    );
  }
}

export default Education;
