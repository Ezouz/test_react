// https://react-day-picker.js.org/
import React, {Component} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import FormAlert from "../components/display_errors";
const check = require("../common/functions");

class FormDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formErrors:{}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(day) {
    let err = {};

    this.setState({ [this.props.name]: day },
      () => {
        if (this.state[this.props.name] !== '')
          err = check.validator[this.props.name](this.props.name, day);
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
    );
  }

  render() { 
    const { age } = this.state;
    return ( 
      <label>
        {age && <p>Birthday: {age.toLocaleDateString()}</p>}
        {!age && <p>Choose a day</p>}
        <FormAlert 
          formErrors={this.state.formErrors} 
          field={this.props.name}
        />
        <DayPickerInput 
          onDayChange={this.handleChange} 
        />
    </label>
    );
  };
}

export default FormDate;
