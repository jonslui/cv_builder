import Section from './Section';
import Fields from './Fields';
import './Styles/CVPreview.css';

/*

*/
function Preview(props){
  return (
    <div id = 'CVPreview'>
      <Fields 
        stateKey = {'names'}
        completedFields = {{
          firstName: props.contactInfo.firstName,
          lastName: props.contactInfo.lastName,
        }}
        templateFields = {{
          firstName: props.templates.contactInfo.firstName,
          lastName: props.templates.contactInfo.lastName
        }}
      />

      <Fields
        stateKey = {'personalInfo'}
        completedFields = {{
          phoneNumber: props.contactInfo.phoneNumber,
          email: props.contactInfo.email,
          address: props.contactInfo.address
        }}
        templateFields = {{
          phoneNumber: props.templates.contactInfo.phoneNumber,
          email: props.templates.contactInfo.email,
          address: props.templates.contactInfo.address
        }}
      />
      
      <hr/>

      <Section
        stateKey = 'websites'
        completedFields = {props.websites}
        templateFields = {props.templates.websites} 
      />

      <hr/>


      <Section
        stateKey = 'workExperience'
        completedFields = {props.workExperience}
        templateFields = {props.templates.workExperience}
      />

    <hr/>

      <Section
        stateKey = 'education'
        completedFields = {props.education}
        templateFields = {props.templates.education}
      />

    <hr/>


      <Section
        stateKey = 'skills'
        completedFields = {props.skills}
        templateFields = {props.templates.skills}  
      />
    </div>
  )
}

export default Preview