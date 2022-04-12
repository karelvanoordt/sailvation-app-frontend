import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchAllUsers, postNewUser } from '../../services/services';

function SignupForm({ Signup }) {
  const [details, setDetails] = useState({ name: '', email: '' });

  const submitHandler = (e) => {
    e.preventDefault();
    Signup(details);
    postNewUser(details);
  };

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

SignupForm.propTypes = {
  Signup: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default SignupForm;
