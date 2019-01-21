import React, {Component} from 'react';
import FormAlert from "../components/display_errors";
const check = require("../common/functions");

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formErrors:{}
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    let err = {};
    let value = event.target.value;
    this.setState({ [event.target.name]: value },
      () => {
        if (this.state[this.props.name] !== '')
          err = check.validator[this.props.name](this.props.name, value);
        this.setState(
          { formErrors: 
            { ...this.state.formErrors, [this.props.name]: err[this.props.name] }
          },
          () => {
            if (Object.keys(err).length === 0)
              this.props.onInputChange(this.props.name, this.state[this.props.name]);
            else
              this.props.onInputChange(this.props.name, '');
          }
        );
      }
    );
  };

  render() { 
    return ( 
      <label>
      {this.props.label}
          <input 
              type={this.props.type} 
              name={this.props.name}
              onChange={this.handleChange}
              required={this.props.required}
          />
          <FormAlert formErrors={this.state.formErrors} field={this.props.name}/>
      </label>
    );
  };

};

export default FormInput;
