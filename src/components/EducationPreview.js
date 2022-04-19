import React, { Component } from 'react'
import "../style.css";
export default class EducationPreview extends Component {
    constructor(props) {
        super(props)
      
        
      }
        render() {
          return (
            <div className="edu-preview-container" >
              <div className="edu-preview-date">
                <span className="edu-preview-from">{this.props.from} </span>
                <span className="edu-preview-to"> {this.props.to}</span>
              </div>
              <span className="edu-preview-university">{this.props.university}</span>
              <span className="edu-preview-city">{this.props.city}</span>
              <span className="edu-preview-degree">{this.props.degree}</span>
              <span className="edu-preview-subject">{this.props.subject}</span>
            </div>
          )
        }
      }