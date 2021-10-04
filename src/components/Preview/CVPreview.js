import Section from './Section';
import Fields from './Fields';
import './Styles/CVPreview.css';
/*

*/
function Preview(props){
  return (
    <div className = 'CVPreview'>
      <Fields 
        stateKey = {'contactInfo'}
        completedFields = {props.contactInfo}
        templateFields = {props.templates.contactInfo}
      />

      <Section
        stateKey = 'websites'
        completedFields = {props.websites}
        templateFields = {props.templates.websites} 
      />

      <Section
        stateKey = 'workExperience'
        completedFields = {props.workExperience}
        templateFields = {props.templates.workExperience}
      />

      <Section
        stateKey = 'education'
        completedFields = {props.education}
        templateFields = {props.templates.education}
      />

      <Section
        stateKey = 'skills'
        completedFields = {props.skills}
        templateFields = {props.templates.skills}  
      />
    </div>
  )
}

export default Preview