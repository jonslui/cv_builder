import InputFields from './InputFields';
import Experience from './Experience';

/*
Contact Info is called using the InputFields component because
its data is kept as a singular object in state.
Work Experience, Education, Websites, and Skills call the Experience component
because their information is held as an array of Objects in state. 
*/
function InputForm(props){
  return (
    <div>
      <InputFields 
        stateKey = 'contactInfo' 
        fields = {props.templates.contactInfo} 
        onDataEntry = {props.onDataEntry}
      />
      <hr/>

      <Experience
        stateKey = 'workExperience'
        completedFields = {props.workExperience}
        templateFields = {props.templates.workExperience}
        onDataEntry = {props.onDataEntry}
        newField = {(key) => props.newField(key)}
        removeField = {(key, index) => props.removeField(key, index)}
      />
      <hr/>

      <Experience
        stateKey = 'education'
        completedFields = {props.education}
        templateFields = {props.templates.education}
        onDataEntry = {props.onDataEntry}
        newField = {(key) => props.newField(key)}
        removeField = {(key, index) => props.removeField(key, index)}
      />
      <hr/>

    </div>
    )
}

export default InputForm;
