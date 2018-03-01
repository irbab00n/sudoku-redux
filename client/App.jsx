import React from 'react';
import { BrowserRouter as Router, Switch, Route, hashHistory } from 'react-router-dom';

import Sidebar from './components/Sidebar.jsx';
import WelcomePage from './components/WelcomePage.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="display-flex-row fh fw">
        <Sidebar />
        <Router history={hashHistory}>
          <Switch>
            <Route exact path="/" render={() => <WelcomePage />} />
          </Switch>
        </Router>
      </div>

    );

  }
};