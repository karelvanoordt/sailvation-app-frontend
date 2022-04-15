import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cruisesReducer from '../../redux/Cruises/cruises';

const reducer = combineReducers({
  cruisesReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;