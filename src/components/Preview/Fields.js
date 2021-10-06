/*
  This component recieves an object from state and creates divs/applies the neccessary styling
  to each key in the object. 
  If a key doesn't contain any data, it uses the template data for that key.

  If the key name is 'description' or 'responsibilities' it creates an unordered list instead
  so \n will be rendered as bullet points.
*/
function Fields(props){
  return (
    <div className = {props.stateKey + 'Preview'}>
      {
        Object.keys(props.templateFields).map((key) => {
          let text = props.completedFields[key].length > 0 ? props.completedFields[key] : props.templateFields[key]
          if(key !== 'responsibilities' && key !== 'description'){            
            return <div className = {key + 'Preview'} key = {key}> {text} </div>
          } else {
            let chunks = text.split('\n')
            return <ul className = {key + 'Preview'} key = {key}>
              {
                chunks.map((string, index) => { return <li key = {index}> {string} </li> })
              }
              </ul>
            }
        })
      }
    </div>
  )
}

export default Fields;