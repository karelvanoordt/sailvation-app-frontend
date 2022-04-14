import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/destinations.scss';

const SingleReservation = ({ reservation, cruises, destinations }) => {
  let destination = {};

  if (destinations) {
    destinations.map((destin) => {
      if (destin.id === reservation.destination_id) {
        destination = destin;
      }
    });
  }

  return (
    <div className="reservation-container">
      {
        cruises.map((cruise) => (
          cruise.id === reservation.cruise_id
          && (

          <div className="d-flex">
            <div>
              <img alt="cruise" src={`${cruise.image}`} style={{ width: '200px', margin: '1rem 0' }} />
            </div>
            <div className="card-desc">
              <Card.Title>{cruise.name}</Card.Title>
              <Card.Text>
                <strong>Country</strong>
                :
                {' '}
                {destination.country}

              </Card.Text>
              <Card.Text>
                <strong>City:</strong>
                {' '}
                {destination.city}
              </Card.Text>
              <Card.Text>
                <strong>Departure city:</strong>
                {' '}
                {destination.departure_city}
              </Card.Text>
            </div>
          </div>

          )
        ))
      }
    </div>
  );
};
export default SingleReservation;
