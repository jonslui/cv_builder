import React from 'react';
import './Styles/InputForm.css';

/*
This class component recieves an object and renders input fields for each key other than 'responsibilities'.
('responsibilities' renders a textarea in order to capture new lines.)
On input, elements call props.onDataEntry which links back to updateState in Main.js

A button is appended following the input fields if the data recieved is an object
that is stored as part of an array of objects in state:
Contact Info is stored as a singular object, not an array of objects, so it does not receive a remove button.
When the button is clicked and state updates, React recognizes the change and removes the corresponding elements from the DOM.
*/

class InputFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.completedFields}

    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

  }

  handleChange(key, value){
    console.log(this.state);
    this.setState({ [key]: value})
  }
  handleRemove(){
    this.setState({...this.props.completedFields})
  }


  render(){
    return (
      <div className = {this.props.stateKey + 'Input'}>
           {
             Object.keys(this.props.templateFields).map((key) => {
                if(key !== 'responsibilities'){
                  return <input 
                    className = {key + 'Input'}
                    type = 'text'
                    value = {this.state[key]}
                    key = {key}
                    placeholder = {this.props.templateFields[key]}
                    onChange = {(event) => {
                      this.handleChange(key, event.target.value);
                      this.props.onDataEntry(this.props.stateKey, key, event.target.value, this.props.index);
                    }}
                  />
                } else {
                  return <textarea
                    className = {key + 'Input'}
                    key = {key}
                    placeholder = {this.props.templateFields[key]}
                    value = {this.state[key]}
                    onChange = {(event) => {
                      this.handleChange(key, event.target.value);
                      this.props.onDataEntry(this.props.stateKey, key, event.target.value, this.props.index)
                    }}
                  />
                }
              })
            }
            {
              this.props.stateKey !== 'contactInfo' ? 
                <input type = 'submit' className = 'deleteButton' onClick = {() => {
                  this.props.removeField(this.props.stateKey, this.props.index)
                  this.handleRemove();      
                }} value = 'Delete' /> : ''
            }
  
      </div>
    )
  }
}


export default InputFields;
