import * as serviceWorker from './serviceWorker';
import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import configureStore, { initialState, history } from './store';
import App from './App';
import DisplayNotif from './components/display_notifs';

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <DisplayNotif />
    <App history={history}/>
  </Provider>
  , document.getElementById("root")
);

serviceWorker.unregister();
