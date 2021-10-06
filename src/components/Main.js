import React from 'react';
import InputForm from './InputForm/InputForm';
import Preview from './Preview/CVPreview';
import uniqid from 'uniqid';
import './Main.css';


class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      templates: {
        filled: {
          contactInfo: {
            firstName: 'First Name',
            lastName: 'Last Name',
            phoneNumber: 'Phone Number',
            email: 'Email Address',
            address: 'Address',
          },
          projects: {
            projectName: 'Project Name',
            languages: 'Languages Used',
            projectLink: 'Link',
            description: 'Description',
          },
          workExperience: {
            jobTitle: 'Job Title',
            companyName: 'Company Name',
            location: 'Location',
            datesEmployed: 'Dates Employed',
            responsibilities: 'Responsibilities',
          },
          education: {
            university: 'University',
            graduationDate: 'Graduation date',
            degree: 'Degree',
            major: 'Major',
            gpa: 'GPA',
          },
          websites: {
            website: 'www.example.com',
          },
          skills:{
            skill: 'Skill',
          }
        },
        empty : {
          contactInfo: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            address: '',
          },
          projects: {
            projectName: '',
            languages: '',
            projectLink: '',
            description: '',
          },
          workExperience: {
            jobTitle: '',
            companyName: '',
            location: '',
            datesEmployed: '',
            responsibilities: '',
          },
          education: {
            university: '',
            graduationDate: '',
            degree: '',
            major: '',
            gpa: '',
          },
          websites: {
            website: '',

          },
          skills:{
            skill: '',
          }
        },
      },
      contactInfo: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        id: uniqid(),
      },
      projects: [],
      workExperience: [],
      education: [],
      websites: [],
      skills: [],
    }
  }
  
  /*  
  This function is called by a button pressed from in the Experience component (affects state.workExperience/education/websites/skills)
  It copies a template object into the corresponding array in state, rendering in the DOM.
  */
  createNewField(key){
    this.setState({
      [key] : this.state[key].concat({...this.state.templates.empty[key], id: uniqid()}),
      
    })
  }

  /*
  This function is called by a button created in an instance of InputFields.
  It recieves key and index values and replaces the array at the key location with a copy of that array minus array[index].
  */
  removeField(key, index){
    this.setState({
      [key] : [...this.state[key].slice(0, index), ...this.state[key].slice(index + 1)]
    })
  }

  /*
  This function is called with each character entered in an instance of InputFields.
  The if statement separates setState logic for keys that only contain a single object (contactInfo) 
  and keys that contain an array of objects (WorkExperience, Education, Websites, Skills). 
  */
  updateState(key, subkey, value, index){
    if (key === 'contactInfo') {
      this.setState(prevState => ({
        [key]: {
          ...prevState[key],
          [subkey]: value,
        }
      }))
    } else {
      this.setState((prevState) => ({
        [key]: [ 
          ...prevState[key].slice(0, index),
          {
            ...prevState[key][index],
            [subkey]: value,
          },
          ...prevState[key].slice(index + 1)
        ]
      }));
    }
  }

  /*
    This function is called by an instance of SampleButton contained in InputForms.
    It passes an object named newState with sample data for:
    contactInfo, projects, workExperience, education, websites, and skills
  */
  displaySample(newState){
    this.setState(newState)
  }


  render(){
    return (
      <div className = 'InputAndPreviewContainer'>
        <InputForm 
          templates = {this.state.templates.filled}
          contactInfo = {this.state.contactInfo}
          websites = {this.state.websites}
          projects = {this.state.projects}
          workExperience = {this.state.workExperience}
          education = {this.state.education}
          skills = {this.state.skills}
          onDataEntry = {(key, subkey, value, index) => this.updateState(key, subkey, value, index)}
          newField = {(key) => this.createNewField(key)}
          removeField = {(key, index) => this.removeField(key, index)}
          displaySample = {(newState) => this.displaySample(newState)}
        />
        
        <Preview
          templates = {this.state.templates.filled}
          contactInfo = {this.state.contactInfo}
          websites = {this.state.websites}
          projects = {this.state.projects}
          workExperience = {this.state.workExperience}
          education = {this.state.education}
          skills = {this.state.skills}
        />

      </div> 
    )
  }
}

export default Main;
