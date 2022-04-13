/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchAllUsers } from '../../redux/Users/users';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate;
  const users =   useSelector((state) => state.usersReducer);
  console.log('Users State', users);
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
        localStorage.setItem('userType', `${user.admin}`)
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  };
  return (
        <div>
          <div className="form-container">
            {!isLoggedIn 
            &&
            <div>
              <h2>Don't you have a account</h2>
              <Link to="/signup">You can Sign Up Here</Link>
            </div> 
            }
            <form>
              <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                  <label htmlFor="email">
                    Email:
                    <input type="email" name="email" id="email" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
                  </label>
                </div>
              <button type="submit" onClick={(e) => {
                e.preventDefault();
                submitHandler();
                {isLoggedIn && navigate(`/cruises`)}
              }}>
                Login
              </button>
              </div>
            </form>
          </div>
        </div>
  )
}


