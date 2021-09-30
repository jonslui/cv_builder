import React from 'react';
import uniqid from 'uniqid';

function InputFields(props){

  return (
    <div>
         {
          Object.keys(props.fields).map((key) => {
            return <input 
                type = 'text' 
                key = {uniqid()}
                placeholder = {props.fields[key]}
                onChange = {(event) => props.onDataEntry(props.id, key, event.target.value)}
              />
          })
        }
      </div>
  )
}

export default InputFields;