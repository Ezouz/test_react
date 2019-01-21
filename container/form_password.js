import React, {Component} from 'react';
import FormAlert from "../components/display_errors";
const check = require("../common/functions");


//* composant qui marche pas *//

class FormPassword extends Component {
  constructor () {
    super();
    this.state = {
      password: '',
      confirmation: '',
      formErrors: {}
    }
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.handleConfirmChange = this.handleConfirmChange.bind(this);
    this.diff = 'Passwords don\'t match';
  }

  checkpwd(target, value) {
    let err = {};

    this.setState({ [target]: value },//
      () => {
        if (this.state[target] !== '')
          err = check.checkGenericKeyValue('user_password', value);
        if ((this.state.password !== this.state.consfirmation) && this.state.consfirmation !== '')
          err['confirmation'] = this.diff;
        else if (this.state.password === this.state.consfirmation)
          err['confirmation'] = undefined;

        this.setState(
          { formErrors: 
            err
          },
          ()=> {
            console.log(this.state)
            // if confirmation has been defined and is equal to pwd
            if (this.state.confirmation 
              && this.state.password === this.state.confirmation) {
                // if no err : props up
                if (!!(this.state.password === this.state.confirmation 
                  && this.state.formErrors.confirmation === undefined 
                  && this.state.formErrors.password === undefined)) {
                  this.props.onPwdChange(this.state.password);
                }
            } else { 
              // if confirmation or pwd state has been changed, it still has to be valid
              // so we set value of the upper props to '' while they are differents
                this.props.onPwdChange(this.props.name, "");
                // we set back the error because password don't match
                // this.setState(
                //   { formErrors: 
                //     { confirmation: this.diff }
                //   })
            }
          });
    });
  }

  handlePwdChange(event) {
    this.checkpwd(event.target.name, event.target.value);

  }
  
  handleConfirmChange(event) {
    this.checkpwd(event.target.name, event.target.value);
  }
    
  render() {
    return (
      <div>
        <label>
        Password:
        <input 
          type="password" 
          name="password" 
          onChange={this.handlePwdChange} 
          required
        />
        <FormAlert formErrors={this.state.formErrors} field="password"/>
        </label>
        <br/>
        <label>
        Please retype your password:
        <input 
            type="password" 
            name="confirmation" 
            onChange={this.handleConfirmChange} 
            required
        />
        <FormAlert formErrors={this.state.formErrors} field="confirmation"/>
        </label>
      </div>
    );
  };
};

export default FormPassword;



// handlePwdChange(event) {
//   let err = {};
//   // let name = event.target;
//   let value = event.target.value;

//   this.setState({ password: value },//
//     () => {
//       if (this.state[this.props.name] !== '')
//         err = check.checkGenericKeyValue('user_password', value);
//       this.setState(
//         { formErrors: 
//           { ...this.state.formErrors, password: err['user_password'] }
//         },
//         ()=> {
//           // if confirmation has been defined and is equal to pwd
//           if (this.state.confirmation 
//             && this.state.password === this.state.confirmation) {
//               // if no err : props up
//               if (!!(this.state.password === this.state.confirmation 
//                 && this.state.formErrors.confirmation === undefined 
//                 && this.state.formErrors.password === undefined)) {
//                 this.props.onPwdChange(this.state.password);
//               }
//           } else { // if confirmation or pwd state has been changed, it still has to be valid
//           // so we set value of the upper props to '' while they are differents
//               this.props.onPwdChange(this.props.name, "");
//               // we set back the error because password don't match
//               this.setState(
//                 { formErrors: 
//                   { ...this.state.formErrors, confirmation: this.diff }
//                 })
//           }
//         });
//   });
// }

// handleConfirmChange(event) {
//   let err = {};

//   if ((this.state.password !== event.target.value) && event.target.value !== '')
//     err = {'confirmation': this.diff};
//   // if (this.state.password !== event.target.value)
//   this.setState({ [event.target.name]: event.target.value });
//   this.setState(
//       { formErrors: 
//         { ...this.state.formErrors, confirmation: err  }
//       }, ()=> {
//       // if confirmation has been defined and is equal to pwd
//         if (this.state.password 
//           && this.state.password === this.state.confirmation) {
//             // if no err props up
//                   if (!!(this.state.password === this.state.confirmation 
//                     && this.state.formErrors.confirmation === undefined 
//                     && this.state.formErrors.password === undefined)) {
//                       this.props.onPwdChange(this.props.name, this.state.password);
//                   }
//         } else { // if confirmation or pwd state has been changed, it still has to be valid
//           // so we set value of the upper props to '' while they are differents
//             this.props.onPwdChange(this.props.name, "");
//             // we set back the error because password don't match
//             this.setState(
//               { formErrors: 
//                 { ...this.state.formErrors, password: err['user_password'] }
//               }
//             );
//         }
//     });
// }