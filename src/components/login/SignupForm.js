import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { postNewUser } from '../../redux/Users/users';

function SignupForm() {
  const dispatch = useDispatch();
  const [details, setDetails] = useState(
    { name: '', email: '' },
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (details.name !== '' && details.email !== '') {
      dispatch(postNewUser(details));
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      {isLoggedIn
        && (
        <div>
          <p>Registarion was successfull</p>
          <Link to="/login">
            You can login from here
          </Link>
        </div>
        )}
      <form
        onSubmit={() => {
          submitHandler();
          isLoggedIn(true);
        }}
      >
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
    </div>
  );
}

export default SignupForm;
