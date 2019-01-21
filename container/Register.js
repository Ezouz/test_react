import React, {Component} from 'react';
import FormInput from "./form_input";
import FormDate from "./form_date";
import FormPassword from "./form_password";
import GenderPicker from "./form_gender";
import { RegisterActionCreator } from "../actions/action_form";
import { connect } from 'react-redux';

class RegisterForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
        firstname: '',
        lastname: '',
        login: '',
        dob: undefined,
        gender: 'other',
        email: '',
        password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
 
  handleChange(key, value) {
    this.setState({ [key]: value }
      // , ()=> {console.log(this.state)} // permit to check input values
    );
  }
   
  handleSubmit(event) {
    event.preventDefault();
    if (
          this.state.firstname
          && this.state.lastname
          && this.state.login
          && this.state.dob
          && this.state.gender
          && this.state.email
          && this.state.password
    ) {
        let data = {};
        for (var key in this.state) {
          if (key === "dob") {
            data[key] = this.state[key].getTime();
          } else {
            if (typeof(key) === "string") 
              data[key] = this.state[key].trim();
          }
        }
        // call thunk action creator
        this.props.register(data);
        //reset component state
          this.setState({     
            firstname: '',
            lastname: '',
            login: '',
            dob: '',
            gender: '',
            email: '',
            password: '',
        });
      }
  }

  render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <FormInput
                label='Firstname:'
                type="text" 
                name="firstname"
                onInputChange={this.handleChange} 
                required="required"
            />
            <br/>
            <FormInput
                label="Lastname:"
                type="text" 
                name="lastname"
                onInputChange={this.handleChange} 
                required="required"
            />
            <br/>
            <FormInput
                label="Login:"
                type="text" 
                name="login"
                onInputChange={this.handleChange}
                required="required"
            />
            <br/>
            <FormInput
                label="Email:"
                type="email" 
                name="email" 
                onInputChange={this.handleChange} 
                required="required"
            />
            <br/>
            <FormDate
              onInputChange={this.handleChange} 
              name="dob"
            />
            <br/>
            <GenderPicker 
              onInputChange={this.handleChange} 
              name="gender"
            />
            <br/>
            <FormPassword 
              onPwdChange={this.handleChange}
              name="password"
            />
            <br/>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
};

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(RegisterActionCreator(data))
});

export default connect(null, mapDispatchToProps)(RegisterForm);
