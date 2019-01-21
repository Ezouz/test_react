import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter as Router} from 'connected-react-router';

import Layout from './components/Layout';
import Welcome from './container/Home';
import Register from './container/Register';
import Notfound from './components/not_found';

const Login = () => <h2>Login Page</h2>

const App = ({history}) => (
    <Router history={history}>
      <Layout>
        <Switch> 
          <Route path="/" exact component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
          {/* <Route path="/profile" component={Profile} />
          <Route path="/matcher" component={Matcher} />
          <Route path="/history" component={History} />
          <Route path="/stats" component={Stats} />
          <Route path="/resetpwd" component={ResetPwd} />  */}
          <Route path="*" component={Notfound} />
        </Switch>
      </Layout>
    </Router>
);

export default App;
