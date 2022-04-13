import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import SingleReservation from './SingleReservation';
import { deleteReservation } from '../../redux/Reservations/reservations';
import { fetchAllReservations } from '../../redux/Reservations/reservations';
import { getAllCruises} from '../../redux/Cruises/cruises'
import { fetchAllDestinations } from '../../redux/Destinations/destinations';
import { useParams } from 'react-router-dom';


const ReservationDetails = () => {
  const [num, setNum] = useState(0)

  const dispatch = useDispatch();
  let {userid} = useParams();

  userid = parseInt(userid, 10);

  const handleDelete = (e, id, userid) => {
    e.preventDefault();
    dispatch(deleteReservation(userid, id));
    dispatch(fetchAllReservations(userid));
    dispatch(fetchAllDestinations())
    setNum(num+1)
  };

 
  useEffect(() => {
    dispatch(getAllCruises(userid));
    dispatch(fetchAllReservations(userid));
    dispatch(fetchAllDestinations())
  }, []);

  useEffect(() => {
    dispatch(getAllCruises(userid));
    dispatch(fetchAllReservations(userid));
    console.log(num)
  }, [num]);


  const cruises = useSelector((state) => state.cruisesReducer);
  const reservationsall = useSelector((state) => state.reservationReducer)
  const destinations = useSelector((state) => state.destinationReducer.data)
  

  return (
    <>
      <h1 className="text-center m-4">Reservations</h1>
     <div className="reservations-container">
        {
         reservationsall && reservationsall.map((reservation) => (
           reservation.user_id === parseInt(userid, 10)
            && (
              <div key={reservation.id} className="reservation">
                <Card>
                  <Card.Header as="h5">
                    Reservation #
                    {reservation.id}
                  </Card.Header>
                  <Card.Body>
                    <SingleReservation
                      cruises={cruises}
                      reservation={reservation}
                      key={reservation.id}
                      destinations = {destinations}
                    />
                    <div className="d-flex justify-content-end">


                      <button type="submit" variant="primary" onClick={(e) => handleDelete(e, reservation.id, userid)} className="btn btn-danger">Cancel the reservation</button>

                    </div>
                  </Card.Body>
                </Card>
              </div>
            )
         ))
        }
      </div> 
    </>
  );
};

export default ReservationDetails;