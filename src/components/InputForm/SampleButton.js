import uniqid from 'uniqid';

function SampleButton(props){

  return (
    <button type = 'submit' onClick = {() => {      
      props.displaySample(
      
    )}}>Load Sample Resume</button>
  )  
}

export default SampleButton;