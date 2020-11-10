import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import BreedImages from './components/BreedImages';

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/:breedname' component={BreedImages}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
