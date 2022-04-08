import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <Link to="/cruises">Cruises</Link>
      <Link to="/cruises/:id">Reservations</Link>
      <Link to="/cruises/:id/reservation/:id/destination">Destinations</Link>
    </div>
  );
}

export default Nav;
