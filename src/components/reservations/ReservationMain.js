import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation } from '../redux/reservations/reservations';
import differenceBetweenDate, { totalCRate } from '../logic/date_logic';

function Reservation(props) {
  const dispatch = useDispatch();
  const { reservation } = props;
  const cruise = useSelector((state) => state.cruiseReducer);

  const getCruiseRate = (id) => {
    let totalRate = 0;
    cruises.forEach((cruise) => {
      if (cruise.id === id) {
        totalRate += cruise.rate;
      }
    });
    return totalRate;
  };
