import React from 'react';
import { Link } from 'react-router-dom';

function ReservationMain() {
  return (
    <div>
      <h1>ReservationMain</h1>
      <ul>
        <li>
          <Link to="/cruises/:id/reservation/:id/destination">
            Destinations(ReservationDetails)
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ReservationMain;
