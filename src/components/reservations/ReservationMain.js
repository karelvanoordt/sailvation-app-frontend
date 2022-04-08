import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllDestinations } from '../../redux/Destinations/destinations';
import { Link } from 'react-router-dom';

function ReservationMain() {

  const dispatch = useDispatch();
  // const userId = 1;
  useEffect(() => {
    dispatch(fetchAllDestinations());
  }, []);

  const destinations = useSelector((state) => state.destinationReducer);
  console.log(destinations.data);

  return (
    <div>
      <h1>Available destinations</h1>
      <ul className="cruise-list">
      { destinations.data && destinations.data.map((destination) => (
      <li key={destination.id} className="reservation-list-item">
      <div>
        <h2>{destination.city}</h2>
        <p>{destination.country}</p>
        <p>{destination.departure_city}</p>
        <p>{destination.days}</p>
        <p>{destination.price}</p>
        <img src={destination.image} alt={'an image of ' + destination.city} />
      </div>
      {/* <Link to={`/cruises/${reservation.cruise_id}/reservation/${reservation.id}/destination`}>
        Reservation
      </Link> */}
    </li>
    ))}
      </ul>
    </div>
  );
}

export default ReservationMain;
