import InputFields from './InputFields';

/*
This component recieves an array of objects stored in props.completedFields,
then calls InputFields for each one, rendering them in the DOM.

The button at the bottom links back to createNewField in Main.js, 
which updates state by replacing the corresponding key's data with a copy of its data + a new object.
React then recognizes this and renders a new set of fields for the User to fill in.
*/
function Experience(props){
  return (
    <div>
      {
        props.completedFields.map((object, index) => {
          return <InputFields 
            key = {index}
            index = {index}
            fields = {props.templateFields}
            removeField = {(key, index) => props.removeField(key, index)}
            onDataEntry = {props.onDataEntry}
            stateKey = {props.stateKey}
          />
        })
      }
      
      <input 
        type = 'submit'
        onClick = {() => props.newField(props.stateKey)}
        value = 'Add'
      />
    </div>
  )
}

export default Experience;
