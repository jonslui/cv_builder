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
          Address: 'Address',
          PhoneNumber: 'Phone Number',
        },
        workExperience: {
          jobTitle: 'Job Title',
          companyName: 'Company Name',
          location: 'Location',
          startDate: 'Start Date',
          endDate: 'End Date',
          responsibilities: 'Responsibilities',
        }
      },
      contactInfo: {
      },
      workExperience: [1,2,3,4,5],
    }
  }


  updateState(key, subkey, value, index){
    console.log(this.state);
    if (key === 'contactInfo') {
      this.setState(prevState => ({
        [key]: {
          ...prevState[key],
          [subkey]: value,
        }
      }))
    } else {
      // this.setState(prevState => ({
      //   [key]: {
      //     ...prevState[key],
      //     [subkey]: value,
      //   }
      // }))
    }

  }

  render(){
    return (
      <InputForm 
        completedWorkExperience = {this.state.workExperience}
        templates = {this.state.templates}
        onDataEntry = {(key, subkey, value) => this.updateState(key, subkey, value)}
      />
    )
  }
}

export default Main;
