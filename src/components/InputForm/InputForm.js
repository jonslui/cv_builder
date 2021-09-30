import React from 'react';
import ContactInfo from './ContactInfo';
import WorkExperience from './WorkExperience';

class InputForm extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
    <div>
      <ContactInfo 
        id = 'contactInfo' 
        templateFields = {this.props.templates.contactInfo} 
        onDataEntry = {this.props.onDataEntry}
      />
      <hr/>

      <WorkExperience
        id = 'workExperience'
        completedFields = {this.props.completedWorkExperience}
        templateFields = {this.props.templates.workExperience}
        onDataEntry = {this.props.onDataEntry}
      />

    </div>
    )
  }
}

export default InputForm