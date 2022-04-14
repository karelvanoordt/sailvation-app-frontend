import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { postNewUser } from '../../redux/Users/users';
import '../../styles/sign.css';

function SignupForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [details, setDetails] = useState(
    { name: '', email: '' },
  );
  const routeChange = () => {
    const path = '/login';
    history.push(path);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const submitHandler = () => {
    if (details.name !== '' && details.email !== '') {
      dispatch(postNewUser(details));
      setIsLoggedIn(true);
      setTimeout(1000);
      setTimeout(routeChange, 2000);
    }
  };

  return (
    <div className="container">
      {isLoggedIn
        && (
        <div>
          <p>Registarion was successful</p>
          <Link to="/login">
            You can login from here
          </Link>
        </div>
        )}
      {!isLoggedIn
      && (
      <div>
        <h2>Already Have an Account?</h2>
        <Link to="/login">
          You can login from here
        </Link>
      </div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
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

          <input type="submit" value="Signup" disabled={isLoggedIn} />
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
