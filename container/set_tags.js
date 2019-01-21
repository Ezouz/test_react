import React, { Component } from 'react';
import DisplayTags from '../presentational/display_tags';

// we should do a function that fetch 'user_preferences': 'list_of_interests'
// and see what's missing to call SetTags component with a precise idea
// but this props would be set to 'place' by default
// as the components asks the question in the same order
// it should return
// update: { 'user_preferences': {
//     'list_of_interests': [TABLEAU DE STRINGS]
// }}
// for the database update

class SetTags extends Component {
    constructor (props) {
        super(props);
        this.state = {
            // this component begin its work by displaying the form about the place
            step: 'place',
            // then contain all the informations relative to each questions
            user_place: {},
            user_attitude: {},
            user_weapon: {},
        };
        this.handleOptionSet = this.handleOptionSet.bind(this);
    }

    linkChosenId(choices, id) {
        for (let i = 0; i < 4; i++) {
            if (choices[i].id.toString() === id)
                return i;
        }
    }

    handleOptionSet (event) {
        // set the step to display and add in state the user's choice 
        // on the current state ('place', 'attitude' or 'weapon')
        let index = this.linkChosenId(this.props.steps[this.state.step].choices, event.target.value);
//  AAAAAAAAAAAAAA   'list_of_interests': [TABLEAU DE STRINGS]
        //  
        // if (this.state.step === 'weapon') {
        //     this.setState({ user_place: this.props.steps.weapon.choices[index] }
        //         , ()=> {console.log(this.state)});
        //     this.setState({ state: '' });
        // }
        // else if (this.state.step === 'attitude') {
        //     this.setState({ user_attitude: this.props.steps.attitude.choices[index] }
        //         , ()=> {console.log(this.state)});
        //     this.setState({ state: 'weapon' });
        // }
        // else if (this.state.step === 'place') {
        //     this.setState({ user_place: this.props.steps.place.choices[index] }
        //         , ()=> {console.log(this.state)});
        //     this.setState({ state: 'attitude' });
        // } 
        // request to db update for the current step or all in the same itme?

    }

    handleStepChange () {

    }
    
    //diplay
    render() {
        return (
            < DisplayTags
             {...this.props}
             {...{ 'step': this.state.step}}
             {...{'fun':this.handleOptionSet}}
            />
            );
        };
    };
    
    export default SetTags;

// send a request per/ tag set with the id of the selected #tag and the table
// props sent to this components are established before the displaying action
// wether a field is not set in db
// or a designed choice is established.

// so if a complete set of props would look like:

// mode = '1' // 1 if it's normal mode
// steps = {
//     'place': {
//                 'question': "define what place would better fit to your mood ?",
//                 'choices': [
//                                 {id: 1, name: 'Bar', dark_name: 'bar'},
//                                 {id: 2, name: 'Cinema', dark_name: 'ber'},
//                                 {id: 3, name: 'Cozy place', dark_name: 'bir'},
//                                 {id: 4, name: 'Park', dark_name: 'bor'}
//                         ]
//             },
//     'attitude': {
//                 'question': "which attitude defines you right now ?",
//                 'choices': [
//                                 {id: 1, name: 'runs into the pile', dark_name: 'bu'},
//                                 {id: 2, name: 'stands there, thinking around', dark_name: 'bu'},
//                                 {id: 3, name: 'wants to know how it ends', dark_name: 'bu'},
//                                 {id: 4, name: 'still digging', dark_name: 'bu'}
//                             ]
//             },
//     'weapon': {
//       'question': "what's you lethal weapon ?",
//       'choices': [
//                     {id: 1, name: 'Beer', dark_name: 'ba'},
//                     {id: 2, name: 'Think Tank', dark_name: 'ba'},
//                     {id: 3, name: 'Sex appeal', dark_name: 'ba'},
//                     {id: 4, name: 'Divinity', dark_name: 'ba'}
//       ]
//     }
// }

// the displaying component just have to receive the step it displays and the mode

