/*

*/
function Fields(props){
  return (
    <div className = {props.stateKey + 'Preview'}>
      {
        Object.keys(props.templateFields).map((key) => {
          let text = props.completedFields[key].length > 0 ? props.completedFields[key] : props.templateFields[key]
          if(key !== 'responsibilities'){            
            return <div
              className = {key + 'Preview'}
              key = {key}
            > {text} </div>
          } else {
            let chunks = text.split('\n')
            return <ul className = {key + 'Preview'} key = {key}>
              {
                chunks.map((string, index) => {
                  return <li 
                    key = {index} >
                      {string}
                    </li>
                })
              }
            </ul>
            }
        })
      }
    </div>
  )
}

export default Fields;