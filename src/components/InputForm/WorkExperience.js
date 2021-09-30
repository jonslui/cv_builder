import React from 'react';

class WorkExperience extends React.Component {
  constructor(props){
    super(props);
    this.state = {

      
    }
  }

  render(){
    return (
      <div>
        {
          // Render Past Work Experiences 
          this.props.completedFields.map((field, index) => {return <div key = {index}>{index}</div> })
          // console.log(this.props.completedFields)
        }
        
        {
          // Render Input Fields
          Object.keys(this.props.templateFields).map((key) => {
            return <input 
                type = 'text' 
                key = {key}
                placeholder = {this.props.templateFields[key]}
                onChange = {(event) => this.props.onDataEntry(this.props.id, key, event.target.value)}
              />
          })
        }
      </div>
    )
  }
}

export default WorkExperience;
