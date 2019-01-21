import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import reducerErrors from './reducers_form';
// import  from './'

export default (history) => combineReducers({
  router: connectRouter(history),
  reducerErrors
  //
})
