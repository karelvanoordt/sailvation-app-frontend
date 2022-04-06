import * as apiCalls from '../../services/services';

const FETCH_ALL_DESTINATIONS = 'FETCH_ALL_DESTINATIONS';

const initialDestinationState = [];

export const fetchAllDestinations = (userId) => async (dispatch) => {
  const payload = await apiCalls.fetchAllDestinations(userId);
  dispatch({
    type: FETCH_ALL_DESTINATIONS,
    payload
  });
};

const destinationReducer = (state = initialDestinationState, action) => {
  switch (action.type) {
    case FETCH_ALL_DESTINATIONS:
      return action.payload;
    default:
      return state;
  };
};

export default destinationReducer;
