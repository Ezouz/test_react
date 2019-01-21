import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor () {
        super();
        this.state = {
            email: '',
            password: '',
            rememberMe: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        // authentification
        //load user profile
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        onChange={this.handleChange} 
                        required
                    />
                </label>
                <br/>
                <label>
                    Password:
                    <input 
                        type="password" 
                        name="password" 
                        onChange={this.handleChange} 
                        required
                    />
                </label>
                <br/>
                <label>
                Remember me:
                <input
                        name="rememberMe"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>
                <button type="submit">Submit</button>
                <br/>
                <Link to="/resetpwd">Forgot about your password ? </Link>
            </form>
        );
      }
};

export default Login;
