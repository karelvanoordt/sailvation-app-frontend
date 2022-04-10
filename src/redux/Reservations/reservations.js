const POST_NEW_RESERVATION = 'reservation/ postNewReservation';
const FETCH_ALL_RESERVATION = 'reservation/ fetchAllReservations';
const DELETE_RESERVATION = 'reservation/deleteReservation';

const END_POINT = 'http://localhost:3000';
const API_ROUTE = '/api/v1/';

export const createReservationAction = (payload) => ({
  type: CREATE_RESERVATION,
  payload,
});

export const getAllReservationAction = (payload) => ({
  type: FETCH_ALL_RESERVATION,
  payload,
});

export const deleteAReservationAction = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});

export const postNewReservation = (payload) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${END_POINT}${API_ROUTE}reservations`, {
    method: 'POST',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  dispatch(createReservationAction(data));
};

const initialState = [];
