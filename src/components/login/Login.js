/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllUsers } from '../../redux/Users/users';

export default function LoginPage() {
  const dispatch = useDispatch();
  const users =   useSelector((state) => state.usersReducer);
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const submitHandler = () => {
    users.map((user) => {
      if (user.email === userEmail) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId', `${user.id}`);
        setIsLoggedIn(true);

      } else {
        setIsLoggedIn(false);
      }
    });
  };

  return (
    
        <div>
          <div className="form-container">
            <form onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
         }}
            >
              <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                  <label htmlFor="email">
                    Email:
                    <input type="email" name="email" id="email" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
                  </label>
                </div>

                <Link type="submit" value="Login" />
              </div>
            </form>
          </div>
          <Link to="/signup">Sign Up</Link>
        </div>
  )
}


