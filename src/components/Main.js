import React from 'react';
import InputForm from './InputForm/InputForm';

class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      templates: {
        contactInfo: {
          firstName: 'First Name',
          lastName: 'Last Name',
          address: 'Address',
          phoneNumber: 'Phone Number',
        },
        workExperience: {
          jobTitle: 'Job Title',
          companyName: 'Company Name',
          location: 'Location',
          startDate: 'Start Date',
          endDate: 'End Date',
          responsibilities: 'Responsibilities',
        },
        education: {
          university: 'University',
          degree: 'Degree',
          major: 'Major',
          gpa: 'GPA',
          graduationDate: 'Graduation date',
        },
        websites: {
          address: 'www.example.com'
        },
        skills:{
          name: 'Skill'
        }
      },
      contactInfo: {},
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
      [key] : this.state[key].concat(this.state.templates[key])
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
    console.log(this.state[key]);

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


  render(){
    return (
      <InputForm 
        skills = {this.state.skills}
        websites = {this.state.websites}
        education = {this.state.education}
        workExperience = {this.state.workExperience}
        templates = {this.state.templates}
        onDataEntry = {(key, subkey, value, index) => this.updateState(key, subkey, value, index)}
        newField = {(key) => this.createNewField(key)}
        removeField = {(key, index) => this.removeField(key, index)}
      />
    )
  }
}

export default Main;
