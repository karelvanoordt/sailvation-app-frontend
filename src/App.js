import {
  BrowserRouter as Router,
} from 'react-router-dom';
import AppContainer from './components/AppContainer';
import LoginPage from './components/login/login';

function App() {
  return (
    <Router>
      <AppContainer />
      <LoginPage />
    </Router>
  );
}

export default App;
