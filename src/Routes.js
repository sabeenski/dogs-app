import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App';
import BreedImages from './components/BreedImages';

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={App}></Route>
          <Route exact path='/:breedname' component={BreedImages}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
