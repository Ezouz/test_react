import React from 'react';

const Dialog = (props) => {
    return (
        // add a props.className to display either Welcome text or errors ?
        <div>
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </div>
    );
  }

export default Dialog;
