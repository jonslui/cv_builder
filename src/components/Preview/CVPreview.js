import PreviewSection from './PreviewSection';
import PreviewFields from './PreviewFields';
import './Styles/CVPreview.css';

/*
  This component creates a Section Component for each key in the props.stateKeys array,
  which correspond to data keys keep in state, and Fields component for Contact Info since
  that data is not stored as an array in state.
  These called components return div elements that populate the CV page.
*/
function Preview(props){
  return (
    <div id = 'CVPreview'>
      <PreviewFields 
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

      <PreviewFields
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

      {
        props.stateKeys.map((key) => {
          return <PreviewSection 
            key = {key + 'Section'}
            stateKey = {key}
            completedFields = {props[key]}
            templateFields = {props.templates[key]}
          />
        })
      }
    </div>
  )
}

export default Preview