import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import FirebaseApp from './FirebaseApp';
import theme from './theme';
import ProgressTrackersPage from '../pages/ProgressTrackersPage';
import AddNiyamProgressPage from '../pages/AddNiyamProgressPage';
import { RecoilRoot } from 'recoil';
import NiyamPage from '../pages/NiyamPage/NiyamPage';

function App(): JSX.Element {
  return (
    <div className='App'>
      <RecoilRoot>
        <FirebaseApp>
          <ThemeProvider theme={theme}>
            <Router>
              <Switch>
                <Route exact path='/' component={ProgressTrackersPage} />
                <Route exact path='/add-your-niyam-progress' component={AddNiyamProgressPage} />
                <Route path='/niyam/:niyamId' component={NiyamPage} />
              </Switch>
            </Router>
          </ThemeProvider>
        </FirebaseApp>
      </RecoilRoot>
    </div>
  );
}

export default App;
