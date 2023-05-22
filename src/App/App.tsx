import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import FirebaseApp from './FirebaseApp';
import ProgressTrackersPage from '../pages/ProgressTrackersPage';
import AddNiyamProgressPage from '../pages/AddNiyamProgressPage';
import theme from './theme';
import ScrollToTop from './ScrollToTop';
import InstallPwaPrompt from './pwaPrompt/InstallPwaPrompt';
import { RecoilRoot } from 'recoil';

function App(): JSX.Element {
  return (
    <div className='App'>
      <RecoilRoot>
        <FirebaseApp>
          <ThemeProvider theme={theme}>
            <Router>
              <InstallPwaPrompt />
              <ScrollToTop />
              <Routes>
                <Route path='/' element={<ProgressTrackersPage />} />
                <Route path='/add-your-niyam-count' element={<AddNiyamProgressPage />} />
              </Routes>
            </Router>
          </ThemeProvider>
        </FirebaseApp>
      </RecoilRoot>
    </div>
  );
}

export default App;
