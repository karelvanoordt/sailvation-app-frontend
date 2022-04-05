import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <Link to="/cruises">Cruises</Link>
      <Link to="/cruises/:id">Reservations</Link>
      <Link to="/cruises/:id/reservation/:id/destionation">Destinations</Link>
    </div>
  );
}

export default Nav;
