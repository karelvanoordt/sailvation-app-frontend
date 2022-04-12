import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router' ;
import Cruise from '../cruises/Cruise';
import { fetchAllUsers } from '../../redux/Users/users';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState('');
  // const Login = (details) => {
  //   console.log(details);
  //   if (details.email === adminUser.email && details.name === adminUser.name) {
  //   //   console.log('Logged in');
  //     setUser({
  //       name: details.name,
  //       email: details.email,
  //     });
  //   } else {
  //   //   console.log('Details not match');
  //   }
  // };

  const navigate = useNavigate();
  // const userId = 1;

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const users = useSelector((state) => state.userReducer);

  const submitHandler = (e) => {
    e.preventDefault();
    users.map((user) => {
      if (user.email === userEmail) {
        navigate(`/${user.id}`);
      }
      return 'Please sign up';
    });
  };

  return (

    <div className="login-container">

      {(userEmail !== '') ? (
        <Cruise />
      ) : (
        <div>
          <div className="form-container">
            <form onSubmit={submitHandler}>
              <div className="form-inner">
                <h2>Login</h2>
                {/* ERROR! */}
                {/* <div className="form-group">
                  <label htmlFor="name">
                    Name:
                    <input type="text" name="name" id="name" onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })}
                    value={details.name} />
                  </label>
                </div> */}

                <div className="form-group">
                  <label htmlFor="email">
                    Email:
                    <input type="email" name="email" id="email" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
                  </label>
                </div>

                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
}
