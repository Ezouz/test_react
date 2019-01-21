import React from 'react';

const displayTags = (props) => {
  let mode = (props.mode === '1') ? 'name' : 'dark_name';
  // console.log(props);
  return (
           <form>
                {props.question}
                <br/>
                <input 
                    type="radio" 
                    value={props.steps[props.step].choices[0].id.toString()}
                    onClick={props.fun}
                /> 
                #{props.steps[props.step].choices[0][mode]} 
                <br/>
                <input 
                  type="radio" 
                  value={props.steps[props.step].choices[1].id.toString()}
                  onClick={props.fun}
                />
                #{props.steps[props.step].choices[1][mode]}
                <br/>
                <input 
                    type="radio" 
                    value={props.steps[props.step].choices[2].id.toString()}
                    onClick={props.fun}
                /> 
                #{props.steps[props.step].choices[2][mode]} 
                <br/>
                <input 
                  type="radio" 
                  value={props.steps[props.step].choices[3].id.toString()}
                  onClick={props.fun}
                /> 
                #{props.steps[props.step].choices[3][mode]} 
            </form>
    );
};

export default displayTags;
