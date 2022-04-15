import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cruisesReducer from '../../redux/Cruises/cruises';
import destinationReducer from '../../redux/Destinations/destinations';

const reducer = combineReducers({
  cruisesReducer,
  destinationReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
