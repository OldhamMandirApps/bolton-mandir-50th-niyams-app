import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import FirebaseApp from './FirebaseApp';
import ProgressTrackersPage from '../pages/ProgressTrackersPage';
import SubmitNiyamProgressPage from '../pages/SubmitNiyamProgressPage';
import theme from './theme';
import ScrollToTop from './ScrollToTop';
import InstallPwaPrompt from './pwaPrompt/InstallPwaPrompt';
import { RecoilRoot } from 'recoil';
import Navbar from './Navbar';
import Footer from './Footer';

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
              <Routes>
                <Route path='/' element={<ProgressTrackersPage />} />
                <Route path='/submit-niyam-progress' element={<SubmitNiyamProgressPage />} />
              </Routes>
              <Footer />
            </Router>
          </ThemeProvider>
        </FirebaseApp>
      </RecoilRoot>
    </div>
  );
}

export default App;
