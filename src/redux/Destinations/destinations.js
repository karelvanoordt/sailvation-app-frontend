import * as apiCalls from '../../services/services';
import axios from 'axios';

const FETCH_ALL_DESTINATIONS = 'FETCH_ALL_DESTINATIONS';

const initialDestinationState = [];

const destinationReducer = (state = initialDestinationState, action) => {
  switch (action.type) {
    case FETCH_ALL_DESTINATIONS:
      return action.payload;
    default:
      return state;
  }
};

export const fetchAllDestinations = () => (dispatch) => {
  axios.get('http://127.0.0.1:3000/api/v1/destinations')
    .then((response) => {
      dispatch({ type: FETCH_ALL_DESTINATIONS, payload: response });
    });
};

export default destinationReducer;
