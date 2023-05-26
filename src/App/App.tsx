import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, styled } from '@mui/material/styles';
import FirebaseApp from './FirebaseApp';
import ProgressTrackersPage from '../pages/ProgressTrackersPage';
import SubmitNiyamProgressPage from '../pages/SubmitNiyamProgressPage';
import theme from './theme';
import ScrollToTop from './ScrollToTop';
import InstallPwaPrompt from './pwaPrompt/InstallPwaPrompt';
import { RecoilRoot } from 'recoil';
import Navbar from '../pages/common/Navbar';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App(): JSX.Element {
  return (
    <div className='App'>
      <RecoilRoot>
        <FirebaseApp>
          <ThemeProvider theme={theme}>
            <Router>
              <InstallPwaPrompt />
              <ScrollToTop />
              <Navbar />
              <Offset />
              <Routes>
                <Route path='/' element={<ProgressTrackersPage />} />
                <Route path='/submit-niyam-progress' element={<SubmitNiyamProgressPage />} />
              </Routes>
            </Router>
          </ThemeProvider>
        </FirebaseApp>
      </RecoilRoot>
    </div>
  );
}

export default App;
