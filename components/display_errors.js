import React from 'react';

const FormAlert = (props) => {
  let content;
  if (props.formErrors[props.field]) {
      content = `${props.formErrors[props.field]}`;
  } else 
    content = '';
  return (
          <div>
            <p>
              {content}
            </p>
          </div>
  );
}

export default FormAlert;
