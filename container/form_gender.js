import React, {Component} from 'react';
import FormAlert from "../components/display_errors";
const check = require("../common/functions");

class GenderPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  formErrors: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    let err = check.checkGenericKeyValue(this.props.name, event.target.value);
    
    this.setState({gender: event.target.value});
    this.setState(
      { formErrors: 
          { ...this.state.formErrors, [this.props.name]: err[[this.props.name]] }
      },
      () => {
          if (Object.keys(err).length === 0)
            this.props.onInputChange(this.props.name, this.state[this.props.name]);
          else
            this.props.onInputChange(this.props.name, '');
      }
    );
  }
  
  render() {
    return (
      <label>
          Pick your gender:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="other">Other</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          <FormAlert formErrors={this.state.formErrors} field={this.props.name}/>
      </label>
    );
  }
}

export default GenderPicker;