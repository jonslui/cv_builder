import React from 'react';
import InputFields from './InputFields';
import './Styles/InputForm.css';

/*
This component recieves an array of objects stored in props.completedFields,
then calls InputFields for each one, rendering them in the DOM.

The button at the bottom links back to createNewField in Main.js, 
which updates state by replacing the corresponding key's data with a copy of its data + a new object.
React then recognizes this and renders a new set of fields for the User to fill in.
*/
function InputSection(props){
  return (
    <div className = {props.stateKey + 'Container'}>
      <h2>{props.buttonText}</h2>

      {
        props.completedFields.map((object, index) => {
          return <InputFields 
            index = {index}
            key = {object.id}
            completedFields = {object}
            templateFields = {props.templateFields}
            removeField = {(key, index) => props.removeField(key, index)}
            onDataEntry = {props.onDataEntry}
            stateKey = {props.stateKey}
          />
        })
      }
      
      <input 
        type = 'submit'
        className = {'addContentButton'}
        onClick = {() => props.newField(props.stateKey)}
        value = {'Add ' + props.buttonText}
      />

      <hr></hr>
    </div>
  )
}

export default InputSection;
