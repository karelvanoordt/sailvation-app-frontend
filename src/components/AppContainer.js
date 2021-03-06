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
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Cruise />
          </Route>
          <Route path="/cruises/reservation">
            <ReservationMain path="/cruises/reservation" />
          </Route>
          <Route path="/reservations">
            <ReservationDetails path="/reservations" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default AppContainer;
