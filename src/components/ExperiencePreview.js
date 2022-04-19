import React, { Component } from "react";
import "../style.css";


export default class ExperiencePreview extends Component {

constructor(props) {
  super(props)

  
}
  render() {
    return (
      <div className="exp-preview-container" >
        <div className="exp-preview-date">
          <span className="exp-preview-from">{this.props.from} </span>
          <span className="exp-preview-to"> {this.props.to}</span>
        </div>
        <span className="exp-preview-position">{this.props.position}</span>
        
        <span className="exp-preview-company">{this.props.company}</span>
        <span className="exp-preview-city">{this.props.city}</span>
      </div>
    )
  }
}
