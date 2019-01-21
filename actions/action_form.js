import { push } from 'connected-react-router';

const REGISTRATION_SUCCESS = "Subscription Success, Please check your emails before sign in (:";
const BAD_REQUEST = "Error, Bad Request !";

export const registrationSuccess = msg => {
  return ({
    type: 'RECEIVE_SUCCESS',
    text: msg
  });
};

export const receiveError = (err) => {
  return {
    type: "RECEIVE_ERROR",
    text: err
  };
};

export const resetErrorState = () => {
  return {
    type: "RESET_ERROR_STATE",
  };
};

// thunk_action_creator
export const RegisterActionCreator = (formDatas, history) => {
  return (dispatch) => {
    return fetch('http://localhost:9000/api/register',
      {
        method: 'POST',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(formDatas)
      })
      .catch(err => { dispatch(receiveError({ 'TypeError': BAD_REQUEST })) })
      .then(response => response.json())
      .then(response => {
        if (response.code === 200) {
          dispatch(registrationSuccess(REGISTRATION_SUCCESS));
        } else {
          dispatch(receiveError({ 'TypeError': response.message }));
        }
      })
      // redirect to login
      .then(() => { dispatch(push('/login')) })
      // faut-il catch ?
    };
};
