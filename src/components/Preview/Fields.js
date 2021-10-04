/*

*/
function Fields(props){
  return (
    <div>
      {
        Object.keys(props.templateFields).map((key) => {
            let text = props.completedFields[key].length > 0 ? props.completedFields[key] : props.templateFields[key]
            return <div
              key = {key}
            > {text} </div>
        })
      }
    </div>
  )
}

export default Fields;