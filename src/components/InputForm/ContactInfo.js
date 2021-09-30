import React from 'react';

class ContactInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {

      
    }
  }

  render(){
    return (
      <div>
         {
          Object.keys(this.props.templateFields).map((key) => {
            return <input 
                type = 'text' 
                key = {key}
                placeholder = {this.props.templateFields[key]}
                onChange = {(event) => this.props.onDataEntry(this.props.id, key, event.target.value)}
              />
          })
        }
      </div>
    )
  }
}

export default ContactInfo;
