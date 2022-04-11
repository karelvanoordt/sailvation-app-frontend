import { Route, Switch } from 'react-router-dom';
import Nav from './nav/Nav';
import Cruise from './cruises/Cruise';
import ReservationDetails from './reservations/ReservationDetails';
import Destinations from './destinations/destinations';

function AppContainer() {
  return (
    <div className="app-container">
      <Nav />
      <div className="content">
        <Switch>
          <Route exact path="/cruises">
            <Cruise />
          </Route>
          <Route path="/cruises/:id">
            <Destinations path="/destinations" />
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
