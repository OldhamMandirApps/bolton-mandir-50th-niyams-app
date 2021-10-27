import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import FirebaseApp from './FirebaseApp';
import ProgressTrackersPage from '../pages/ProgressTrackersPage';
import AddNiyamProgressPage from '../pages/AddNiyamProgressPage';
import NiyamPage from '../pages/NiyamPage';
import theme from './theme';
import ScrollToTop from './ScrollToTop';

function App(): JSX.Element {
  return (
    <div className='App'>
      <RecoilRoot>
        <FirebaseApp>
          <ThemeProvider theme={theme}>
            <Router>
              <ScrollToTop />
              <Switch>
                <Route exact path='/' component={ProgressTrackersPage} />
                <Route exact path='/add-your-niyam-count' component={AddNiyamProgressPage} />
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
