import React from 'react';
import './Styles/InputForm.css';

/*
This function component recieves an object and renders input fields for each 
key other than 'responsibilities' and 'description'.
(these return a textarea in order to capture new lines.)
On input, elements call props.onDataEntry which links back to updateState in Main.js

A button is appended following the input fields if the data recieved is not contactInfo
(Contact Info is stored as a single object, not an array of objects, so it does not receive a remove button.)
When the button is clicked and state updates, React recognizes the change and removes the corresponding elements from the DOM.
*/
const InputFields = (props) => {
  return (
    <div className = {props.stateKey + 'Input'}>
      {
        Object.keys(props.templateFields).map((key) => {
          if(key !== 'responsibilities' && key !== 'description'){
            return <input 
              className = {key + 'Input'}
              type = 'text'
              key = {key}
              placeholder = {props.templateFields[key]}
              value = {props.completedFields[key]}
              onChange = {(event) => {
                props.onDataEntry(props.stateKey, key, event.target.value, props.index);
              }}
            />
          }
          return <textarea
              className = {key + 'Input'}
              key = {key}
              placeholder = {props.templateFields[key]}
              value = {props.completedFields[key]}
              onChange = {(event) => {
                props.onDataEntry(props.stateKey, key, event.target.value, props.index);
              }}
          />
        })
      }

      {
        props.stateKey !== 'contactInfo' ? 
          <input type = 'submit'
            className = 'deleteButton'
            value = 'Delete'
            onClick = {() => {
              props.removeField(props.stateKey, props.index)
            }}/> : ''
      }

    </div>
  )
}


export default InputFields;
