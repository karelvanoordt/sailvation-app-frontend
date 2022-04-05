import React from 'react';
import { Link } from 'react-router-dom';

function Cruise() {
  return (
    <div>
      <h1>Cruise</h1>
      <Link to="/cruises/:id">
        Reservation
      </Link>
    </div>
  );
}

export default Cruise;
