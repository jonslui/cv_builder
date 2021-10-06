import Fields from './Fields';
import './Styles/CVPreview.css'
/*
  This component recieves an array of data from CVPreview and then creates Fields Components
  for each object in the array.
*/
function Section(props){
  return (
    <div className = {props.stateKey + 'Section'}>
      {
        props.completedFields.map((object) => {
            return <Fields
              key = {object.id}
              stateKey = {props.stateKey}
              completedFields = {object}
              templateFields = {props.templateFields}
          />
        })
        
      }

    </div>
  )
}

export default Section;