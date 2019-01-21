import React, { Component } from 'react';
import Dialog from "../components/dialog.js";

/**
* si auth, 
* add name and invite to set_tags ?
**/

export default class Welcome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        title: "Welcome",
        message: "Thank you for visiting our Matcha ! Sign up and meet people wherever you go."
      },
    };
  }

  componentDidMount() {
    fetch('http://api.icndb.com/jokes/random')
      .then(response => response.json())
      .then(data => {
        const msg = data.value.joke
        console.log(msg)
        this.setState({
          data : {
            title: 'C\'est uNe JoKE',
            message: msg
          }
        })
      });
  }
  
  render() {
    return (
        <Dialog
        title={this.state.data.title}
        message={this.state.data.message}
        />
        );
  }

}

