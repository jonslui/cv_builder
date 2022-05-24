import PreviewFields from './PreviewFields';
import './Styles/CVPreview.css'
/*
  This component recieves an array of data from CVPreview and then creates Fields Components
  for each object in the array.

  If there are objects in the array, add a <hr> to separate sections
*/

function PreviewSection(props){
  return (
    <div>
      <div className = {props.stateKey + 'Section'}>
      <h4>{props.stateKey}</h4>
      {/* <div className = 'hr'></div> */}
        {
          props.completedFields.map((object) => {
              return <PreviewFields
                title = {props.titles}
                key = {object.id}
                stateKey = {props.stateKey}
                completedFields = {object}
                templateFields = {props.templateFields}
              />
          }) 
        }
      </div>
    </div>
    
  )
}

export default PreviewSection;