import * as apiCalls from '../../services/services';

const FETCH_ALL_CRUISES = 'FETCH_ALL_CRUISES';
const POST_NEW_CRUISE = 'POST_NEW_CRUISE';
const DELETE_CRUISE = 'DELETE_CRUISE';

const initalCruiseReducer = [];

export const fetchAllCruises = (userId) => async (dispatch) => {
  const payload = await apiCalls.fetchAllCruises(userId);
  dispatch({
    type: FETCH_ALL_CRUISES,
    payload,
  });
};

export const postNewCruise = (newCruiseData) => async (dispatch) => {
  const payload = await apiCalls.postNewCruise(newCruiseData);
  dispatch({
    type: POST_NEW_CRUISE,
    payload,
  });
};

export const deleteCruise = (userId, cruiseId) => async (dispatch) => {
  await apiCalls.deleteCruise(userId, cruiseId);
  dispatch({
    type: DELETE_CRUISE,
    cruiseId,
  });
};

const cruisesReducer = (state = initalCruiseReducer, action) => {
  switch (action.type) {
    case FETCH_ALL_CRUISES:
      return action.payload;
    case POST_NEW_CRUISE:
      return [...state, ...action.payload];
    case DELETE_CRUISE:
      return state.filter((cruiseElement) => cruiseElement.cruiseId !== action.cruiseId);
    default:
      return state;
  }
};

export default cruisesReducer;
