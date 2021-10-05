import InputFields from './InputFields';
import Experience from './Experience';
import ExportPDF from './Export';
import './Styles/InputForm.css';

/*
Contact Info is called using the InputFields component because
its data is kept as a singular object in state.
Work Experience, Education, Websites, and Skills call the Experience component
because their information is held as an array of Objects in state. 
*/
function InputForm(props){
  return (
    <div className = 'InputForm'>
      <InputFields 
        stateKey = 'contactInfo' 
        completedFields = {props.contactInfo}
        templateFields = {props.templates.contactInfo}
        onDataEntry = {props.onDataEntry}
      />
      <hr/>

      <Experience
        stateKey = 'websites'
        buttonText = 'Website'
        completedFields = {props.websites}
        templateFields = {props.templates.websites}
        onDataEntry = {props.onDataEntry}
        newField = {props.newField}
        removeField = {props.removeField}
      />
      <hr/>

      <Experience
        stateKey = 'workExperience'
        buttonText = 'Work Experience'
        completedFields = {props.workExperience}
        templateFields = {props.templates.workExperience}
        onDataEntry = {props.onDataEntry}
        newField = {props.newField}
        removeField = {props.removeField}
      />
      <hr/>

      <Experience
        stateKey = 'education'
        buttonText = 'Education'
        completedFields = {props.education}
        templateFields = {props.templates.education}
        onDataEntry = {props.onDataEntry}
        newField = {props.newField}
        removeField = {props.removeField}
      />
      <hr/>

      <Experience
        stateKey = 'skills'
        buttonText = 'Skill'
        completedFields = {props.skills}
        templateFields = {props.templates.skills}
        onDataEntry = {props.onDataEntry}
        newField = {props.newField}
        removeField = {props.removeField}
      />
      <hr/>

      <ExportPDF />
    </div>
    )
}

export default InputForm;
