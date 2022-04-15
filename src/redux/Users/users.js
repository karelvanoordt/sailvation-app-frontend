import * as apiCalls from '../../services/services';

const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
const POST_NEW_USER = 'POST_NEW_USER';

const initialUserState = [];

export const fetchAllUsers = () => async (dispatch) => {
  const payload = await apiCalls.fetchAllUsers();
  dispatch({
    type: FETCH_ALL_USERS,
    payload,
  });
};

export const postNewUser = (newUserData) => async (dispatch) => {
  const payload = await apiCalls.postNewUser(newUserData);
  dispatch({
    type: POST_NEW_USER,
    payload,
  });
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.payload;
    case POST_NEW_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default userReducer;
