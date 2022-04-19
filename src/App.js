import "./style.css";
import React, { Component } from "react";
import Header from "./components/Header";
import PersonalInformation from "./components/PersonalInformation";
import Experience from "./components/Experience";
import Education from "./components/Education";
import { nanoid } from "nanoid";
import ExperiencePreview from "./components/ExperiencePreview";
import EducationPreview from "./components/EducationPreview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        section: "personalInfo",
        id: nanoid(),
        firstName: "",
        lastName: "",
        title: "",
        email: "",
        phone: "",
        address: "",
        description: "",
      },
      experiences: [{
        section: "experiences",
        id: nanoid(),
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      },],
      educations: [{
        section: "educations",
        id: nanoid(),
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },]

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleExpAndEduChange = this.handleExpAndEduChange.bind(this);
    this.addExperince = this.addExperince.bind(this);
    this.addEducation = this.addEducation.bind(this)

  }
  componentDidMount(){
    if(!window.localStorage.getItem('state')){
      window.localStorage.setItem('state', JSON.stringify(this.state))
    }else{
      this.setState(JSON.parse(window.localStorage.getItem('state')))
    }
  }
  componentDidUpdate(){
    window.localStorage.setItem('state', JSON.stringify(this.state))
  }

  experiences = () =>this.state.experiences.map((experience, i) => {
   
    return (<Experience key={experience.id}
                        info = {experience}
                        handleChange =  {this.handleExpAndEduChange}
                        isLast = { i === this.state.experiences.length -1 }
                        addExperince = {this.addExperince}
                        deleteExpOrEdu = {this.deleteExpOrEdu}
                         />)
  })
  educations = () => this.state.educations.map((education, i) => {
   
    return (<Education key={education.id}
                        info = {education}
                        handleChange =  {this.handleExpAndEduChange}
                        isLast = { i === this.state.educations.length -1 }
                        addEducation = {this.addEducation}
                        deleteExpOrEdu = {this.deleteExpOrEdu}
                         />)
  })

  handleChange = (e, section) => {
    let { name, value } = e.target;
    
    this.setState((prevState) => {
      return {
        [section]: { ...prevState[section], [name]: value },
      };
    });
  };

  handleExpAndEduChange = (e, section, id) => {
    let { name, value } = e.target;
    this.setState((prevState) => {
      const newInfo = prevState[section].map((oldInfo) => {
              if (oldInfo.id === id) {
                return {
                  ...oldInfo,
                  [name]: value,
                };
              } else {
                return oldInfo;
              }
            });
            return {
              [section]: newInfo,
            };
          });
        };
  addExperince = (e) => {
    e.preventDefault();
    this.setState({
      experiences: this.state.experiences.concat({
        section: "experiences",
        id: nanoid(),
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      }
    )})
  }
  addEducation = (e) => {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.concat({
        section: "educations",
        id: nanoid(),
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      }
    )})
  }
  deleteExpOrEdu = (e, section, id) => {
    e.preventDefault();
    const newInfo = this.state[section].filter(oldInfo => {
      return oldInfo.id !== id
    })
    this.setState({
      [section]: newInfo
    })

  }
  experiencePreview = () => this.state.experiences.map(exp => {
        return (
          <ExperiencePreview key={nanoid()}
                            position={exp.position}
                            company ={exp.company}
                            city = {exp.city}
                            from = {exp.from}
                            to = {exp.to}
                            />
        )
  })
  educationPreview = () => this.state.educations.map(edu => {
    return (
      <EducationPreview key={nanoid()}
                        university={edu.university}
                        city ={edu.city}
                        degree = {edu.degree}
                        subject = {edu.subject}
                        from = {edu.from}
                        to = {edu.to}
                        />
    )
})

  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="form-container">
          <PersonalInformation info={this.state.personalInfo} handleChange={this.handleChange} />
        {this.experiences()}
        {this.educations()}
        </div>
        <div className="cv-container">
          <div className="personal-info">
            <h1 className = "personal-info-name">
              {this.state.personalInfo.firstName}{" "}
              {this.state.personalInfo.lastName}
            </h1>
            <div className="personal-info-contact">
              <span>{this.state.personalInfo.phone}</span>
              <span>{this.state.personalInfo.email}</span>
              <span>{this.state.personalInfo.address}</span>
            </div>
            <h2 className = "personal-info-title">{this.state.personalInfo.title}</h2>
          </div>
          <div className="experience-education">
            <p className = "personal-info-desc">{this.state.personalInfo.description}</p>
            <div className="experience-block">
              <h3>WORK EXPERIENCE</h3>
              {this.experiencePreview()}
            </div>
            <div className="education-block">
              <h3>EDUCATION</h3>
              {this.educationPreview()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
