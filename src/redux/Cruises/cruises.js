import * as apiCalls from '../../services/services';

const GET_ALL_CRUISES = 'cruisesStore/cruises/GET_ALL_CRUISES';
const POST_NEW_CRUISE = 'cruisesStore/cruises/POST_NEW_CRUISE';
const DELETE_CRUISE = 'cruisesStore/cruises/DELETE_CRUISE';

const initalCruiseReducer = [];

export const getAllCruises = (userId) => async (dispatch) => {
  const payload = await apiCalls.fetchAllCruises(userId);
  dispatch({
    type: GET_ALL_CRUISES,
    payload,
  });
};

export const postNewCruise = (newCruiseData, userId) => async (dispatch) => {
  console.log('post', newCruiseData);
  const payload = await apiCalls.postNewCruise(newCruiseData, userId);
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
    case GET_ALL_CRUISES:
      console.log('Payload', action.payload);
      return action.payload;
    case POST_NEW_CRUISE:
      return [...state, action.payload];
    case DELETE_CRUISE:
      return state.filter((cruiseElement) => cruiseElement.cruiseId !== action.cruiseId);
    default:
      return state;
  }
};

export default cruisesReducer;
