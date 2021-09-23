import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProgressTrackersPage from '../ProgressTrackersPage/ProgressTrackersPage';

function App(): JSX.Element {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <ProgressTrackersPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
