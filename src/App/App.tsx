import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import FirebaseApp from './FirebaseApp';
import SubmitNiyamProgressPage from '../pages/SubmitNiyamProgressPage';
import theme from './theme';
import ScrollToTop from './ScrollToTop';
import InstallPwaPrompt from './pwaPrompt/InstallPwaPrompt';
import { RecoilRoot } from 'recoil';
import Navbar from './Navbar';
import Footer from './Footer';
import FirestoreTargetBanner from './FirestoreTargetBanner';
import Snackbar from '../pages/ProgressTrackersPage/Snackbar';

function App(): JSX.Element {
  return (
    <div className='App'>
      <RecoilRoot>
        <FirebaseApp>
          <ThemeProvider theme={theme}>
            <Router>
              <InstallPwaPrompt />
              <ScrollToTop />
              <FirestoreTargetBanner />
              <Navbar />
              <Routes>
                <Route path='/' element={<SubmitNiyamProgressPage />} />
                <Route path='/submit-niyam-progress' element={<SubmitNiyamProgressPage />} />
              </Routes>
              <Snackbar />
              <Footer />
            </Router>
          </ThemeProvider>
        </FirebaseApp>
      </RecoilRoot>
    </div>
  );
}

export default App;
