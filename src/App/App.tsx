import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import FirebaseApp from './FirebaseApp';
import theme from './theme';
import ProgressTrackersPage from '../pages/ProgressTrackersPage';
import AddNiyamProgressPage from '../pages/AddNiyamProgressPage';
import { RecoilRoot } from 'recoil';

function App(): JSX.Element {
  return (
    <div className='App'>
      <RecoilRoot>
        <FirebaseApp>
          <ThemeProvider theme={theme}>
            <Router>
              <Switch>
                <Route exact path='/'>
                  <ProgressTrackersPage />
                </Route>
                <Route exact path='/add-your-niyam-progress'>
                  <AddNiyamProgressPage />
                </Route>
              </Switch>
            </Router>
          </ThemeProvider>
        </FirebaseApp>
      </RecoilRoot>
    </div>
  );
}

export default App;
