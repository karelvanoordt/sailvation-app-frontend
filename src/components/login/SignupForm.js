/* eslint-disable*/

import React, { useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { postNewUser } from '../../redux/Users/users';
 

function SignupForm() {

  const dispatch = useDispatch();
  const [details, setDetails] = useState(
    {name: '', email: ''}
  );

  const submitHandler = (e) => {
    e.preventDefault();
    if ( details.name !== '' && details.email !== '' ) {
      dispatch(postNewUser(details));
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Signup</h2>
        {/* ERROR! */}
        <div className="form-group">
          <label htmlFor="name">
            Name:
            <input type="text" name="name" id="name" onChange={(e) => setDetails({ ...details, name: e.target.value })} value={details.name} />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email} />
          </label>
        </div>

        <input type="submit" value="Signup" />
      </div>
    </form>
  );
}

export default SignupForm;
