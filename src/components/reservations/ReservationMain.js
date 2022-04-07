import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchAllReservations from '../../services/services';
import { Link } from 'react-router-dom';

function ReservationMain() {
  const reservations = useSelector((state) => state.reservationReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllReservations(1));
  }, [dispatch]);

  return (
    <div>
      <h1>r1</h1>
      <ul className="cruise-list">
    {reservations.map((reservation) => (
      <li key={reservation.id} className="reservation-list-item">
      <div>
        <h2>{reservation.start_date}</h2>
        <p>{reservation.finish_dat}</p>
      </div>
      <Link to={`/cruises/${reservation.cruise_id}/reservation/${reservation.id}/destination`}>
        Reservation
      </Link>
    </li>
    ))}
      </ul>
    </div>
  );
}

export default ReservationMain;
