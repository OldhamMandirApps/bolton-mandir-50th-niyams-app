import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProgressTrackersPage from '../pages/ProgressTrackersPage';
import FirebaseApp from './FirebaseApp';

function App(): JSX.Element {
  return (
    <div className='App'>
      <FirebaseApp>
        <Router>
          <Switch>
            <Route exact path='/'>
              <ProgressTrackersPage />
            </Route>
          </Switch>
        </Router>
      </FirebaseApp>
    </div>
  );
}

export default App;
