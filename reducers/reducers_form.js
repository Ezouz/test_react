

export default function reducerErrors(state = {}, action) {
  if (action.type === 'RECEIVE_SUCCESS') {
    return Object.assign({}, state, {
      isSuccess: action.text,
      isError: undefined,
    });
  }
  else if (action.type === 'RECEIVE_ERROR') {
    return Object.assign({}, state, {
      isSuccess: undefined,
      isError: action.text
    });
  }
  else if (action.type === 'RESET_ERROR_STATE') {
    return Object.assign({}, state, {
      isSuccess: false,
      isError: false
    });
  }
  else
    return state;
};
