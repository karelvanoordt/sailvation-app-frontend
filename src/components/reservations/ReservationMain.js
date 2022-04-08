import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllDestinations } from '../../redux/Destinations/destinations';
import { Link } from 'react-router-dom';
import '../../App.css'

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
        <h2>{destination.country}, {destination.city} from {destination.departure_city}</h2>
        <p>{destination.days} days</p>
        <p>$ {destination.price}</p>
        <img src={destination.image} alt={'an image of ' + destination.city} className='d-img' />
      <Link to={`/cruises/:id/reservation/:id/destination`}>
        Reserve trip
      </Link>
      </div>
    </li>
    ))}
      </ul>
    </div>
  );
}

export default ReservationMain;
