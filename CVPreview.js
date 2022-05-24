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
      <div className = 'personalInfo'>

        <p> </p>

        <p>
      <PreviewFields
        stateKey = {'email'}
        completedFields = {{
          email: props.contactInfo.email,
          phoneNumber: props.contactInfo.phoneNumber,
          address: props.contactInfo.address

        }}
        templateFields = {{
          email: props.templates.contactInfo.email,
          phoneNumber: props.templates.contactInfo.phoneNumber,
          address: props.templates.contactInfo.address,
        }}
      />
        </p>

        <p> </p>


      </div>
      <div className = 'nameJob'>
      <PreviewFields 
        stateKey = {'names'}
        completedFields = {{
          Name: props.contactInfo.Name,
          jobWanted: props.contactInfo.jobWanted
        }}
        templateFields = {{
          Name: props.templates.contactInfo.Name,
          jobWanted: props.templates.contactInfo.jobWanted
        }}
      />
      
        <div className='CV'>
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

      </div>
    </div>
  )
}

export default Preview