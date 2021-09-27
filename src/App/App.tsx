import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProgressTrackersPage from '../pages/ProgressTrackersPage';
import FirebaseApp from './FirebaseApp';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import AddNiyamsPage from '../pages/AddNiyamsPage';

function App(): JSX.Element {
  return (
    <div className='App'>
      <FirebaseApp>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path='/'>
                <ProgressTrackersPage />
              </Route>
              <Route exact path='/add-niyams'>
                <AddNiyamsPage />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </FirebaseApp>
    </div>
  );
}

export default App;
