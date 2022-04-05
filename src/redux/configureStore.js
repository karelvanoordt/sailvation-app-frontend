import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import cruisesReducer from './Cruises/cruises';
import destinationReducer from './Destinations/destinations';
import reservationReducer from './Reservations/reservations';

const reducer = combineReducers({
  cruisesReducer,
  destinationReducer,
  reservationReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
