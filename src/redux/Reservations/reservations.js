import * as apiCalls from '../../services/services';

const FETCH_ALL_RESERVATIONS = 'FETCH_ALL_RESERVATIONS';
const POST_NEW_RESERVATION = 'POST_NEW_RESERVATION';
const DELETE_RESERVATION = 'DELETE_RESERVATION';

const initialReservationState = [];

export const fetchAllReservations = (userId) => async (dispatch) => {
  const payload = await apiCalls.fetchAllReservations(userId);
  dispatch({
    type: FETCH_ALL_RESERVATIONS,
    payload,
  });
};

export const postNewReservations = (newReservationData, userId) => async (dispatch) => {
  const payload = await apiCalls.postNewReservation(newReservationData, userId);
  dispatch({
    type: POST_NEW_RESERVATION,
    payload,
  });
};

export const deleteReservation = (userId, reservationId) => async (dispatch) => {
  await apiCalls.deleteReservation(userId, reservationId);
  dispatch({
    type: DELETE_RESERVATION,
    reservationId,
  });
};

const reservationReducer = (state = initialReservationState, action) => {
  switch (action.type) {
    case FETCH_ALL_RESERVATIONS:
      return action.payload;
    case POST_NEW_RESERVATION:
      return [action.payload];
    case DELETE_RESERVATION:
      return state.filter(
        (reservationElement) => reservationElement.reservationId !== action.reservationId,
      );
    default:
      return state;
  }
};

export default reservationReducer;
