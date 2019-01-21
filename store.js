import thunk from 'redux-thunk';
import createRootReducer from './reducers/';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

export const initialState = {
  reducerErrors: {
    isSuccess: false,
    isError: false,
  }
};

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk // ... other middlewares ...
      )
    )
  );
  return store
};
