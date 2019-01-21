import React from 'react';
import { resetErrorState } from "../actions/action_form";
import { connect } from 'react-redux';

 const DisplayNotif = (props) => {
    let content = '';
    let style = '';

    props.resetError();
    if (props.suce) {
      style = `{{color:green}}`;
      content = props.suce;
    }  else if (props.err) {
      style = `{{color:red}}`;
      content = props.err.TypeError;
    }
    return (
      <div styles={style}>
        <p>
          {content}
        </p>
      </div>
    );
  };

const mapStateToProps = (state) => ({
            suce: state.reducerErrors.isSuccess,
            err: state.reducerErrors.isError,
});

const mapDispatchToProps = (dispatch) => ({
  resetError: () => window.setTimeout(() => dispatch(resetErrorState()), 15000)
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayNotif);
