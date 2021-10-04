import Fields from './Fields';
/*

*/
function Section(props){
  return (
    <div>
      {
        props.completedFields.map((object, index) => {
            return <Fields
              key = {index}
              completedFields = {object}
              templateFields = {props.templateFields}
          />
        })
      }
    </div>
  )
}

export default Section;