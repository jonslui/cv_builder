import InputFields from './InputFields';
import InputSection from './InputSection';
import ExportPDF from './Export';
import AutoFillButtons from './AutoFillButtons';
import './Styles/InputForm.css';

/*
Contact Info is called using the InputFields component because
its data is kept as a singular object in state.
Work Experience, Projects, Education, Websites, and Skills are rendered using the Experience component
because their information is held as an array of Objects in state.
*/
function InputForm(props){
  return (
    <div className = 'InputForm'>
      <h1>CV Builder</h1>

      <AutoFillButtons 
        replaceState = {props.replaceState}
      />

      <h2>Contact Info</h2>
      <InputFields 
        stateKey = 'contactInfo' 
        key = {props.contactInfo.id}
        completedFields = {props.contactInfo}
        templateFields = {props.templates.contactInfo}
        onDataEntry = {props.onDataEntry}
      />
      <hr/>

    {
      props.stateKeys.map((key, index) => {
        return <InputSection
          stateKey = {key}
          key = {key}
          buttonText = {props.buttonText[index]}
          completedFields = {props[key]}
          templateFields = {props.templates[key]}
          onDataEntry = {props.onDataEntry}
          newField = {props.newField}
          removeField = {props.removeField}
        
        />
      })
    }

      <ExportPDF />
    </div>
    )
}

export default InputForm;
