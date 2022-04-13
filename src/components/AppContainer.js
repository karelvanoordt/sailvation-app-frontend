import { Route, Switch } from 'react-router-dom';
import Nav from './nav/Nav';
import Cruise from './cruises/Cruise';
import ReservationDetails from './reservations/ReservationDetails';
import ReservationMain from './reservations/ReservationMain';
import SignupForm from './login/SignupForm';
import Login from './login/Login';

function AppContainer() {
  return (
    <div className="app-container">
      <Nav />
      <div className="content">
        <Switch>
          <Route exact path="/signup">
            <SignupForm />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cruises">
            <Cruise />
          </Route>
          <Route path="/cruises/:id">
            <ReservationMain path="/cruises/:id/reservation" />
          </Route>
          <Route>
            <ReservationDetails path="/cruises/:id/reservation/:id/destination" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default AppContainer;
