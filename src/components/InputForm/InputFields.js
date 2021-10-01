/*
This component recieves an object and renders input fields for each key in that object.
Each input field calls props.onDataEntry which links back to updateState in Main.js

A button is appended following the input fields if the data recieved is an object
that is stored as part of an array of objects in state:
Contact Info is stored as a singular object, not an array of objects, so it does not receive a remove button.
When the button is clicked and state updates, React recognizes the change and removes the corresponding elements from the DOM.
*/
function InputFields(props){
  return (
    <div>
         {
           Object.keys(props.fields).map((key) => {
              return <input 
                type = 'text' 
                key = {key}
                placeholder = {props.fields[key]}
                onChange = {(event) => props.onDataEntry(props.stateKey, key, event.target.value, props.index)}

              />
            })
          }
          {
            props.stateKey !== 'contactInfo' ? <input type = 'submit' onClick = {() => props.removeField(props.stateKey, props.index)} value = 'Delete' /> : ''
          }

    </div>
  )
}

export default InputFields;
